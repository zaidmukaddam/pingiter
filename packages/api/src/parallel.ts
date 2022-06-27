import { EVENTS } from './enums/events';
import { Everbs } from './enums/http';
import { PingiterLogItem } from './models/PingiterLog';
import { PingiterEventCallback } from './models/PingiterEvent';
import { PingiterRequestSettings } from './models/PingiterRequestSettings';
import { getTimeAverage } from './util';
import { validate } from './validate';
import { handleApiCall, handleApiCallError } from './common';
import { AxiosError } from 'axios';

export const runParallel = async (
  settings: PingiterRequestSettings,
  eventCallback?: PingiterEventCallback
) => {
  const { iterations, url, verb = Everbs.GET } = settings;
  const { valid, errors } = validate(url, verb);

  if (!valid) {
    return Promise.reject(errors);
  }

  const results = [] as Array<number>;
  const logs = [] as Array<PingiterLogItem>;

  const requests = Array.from({ length: iterations }).map(async (_v, index) => {
    const runStartTime = new Date().valueOf(); // Only used for fails.

    try {
      const { duration, logItem } = await handleApiCall(index, settings);
      results.push(duration);
      logs.push(logItem);

      if (eventCallback) {
        eventCallback(EVENTS.RESPONSE_OK, logItem, logs);
      }
    } catch (error) {
      const { logItem } = handleApiCallError(
        settings,
        error as AxiosError,
        index,
        runStartTime
      );
      logs.push(logItem);

      if (eventCallback) {
        eventCallback(EVENTS.RESPONSE_FAILED, logItem, logs);
      }
    }
  });

  await Promise.all(requests);
  return { results, logs, average: getTimeAverage(results) };
};
