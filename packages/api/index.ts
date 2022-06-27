import { Everbs } from './src/enums/http';
import { PingiterEventCallback } from './src/models/PingiterEvent';
import { PingiterRequestSettings } from './src/models/PingiterRequestSettings';
import { runParallel } from './src/parallel';
import { runSequence } from './src/sequence';

export const parseOptions = (options?: PingiterRequestSettings) => {
  return {
    ...options,
    verb: options.verb.toLowerCase() as Everbs,
    iterations: parseInt(options.iterations.toString(), 10)
  };
};

export const run = (
  parallel: boolean,
  options: PingiterRequestSettings,
  eventCallback?: PingiterEventCallback
) => {
  const parsedOptions = parseOptions(options);

  if (parallel) {
    return runParallel(parsedOptions, eventCallback);
  }

  return runSequence(parsedOptions, eventCallback);
};

export default {
  run,
  runParallel,
  runSequence
};
