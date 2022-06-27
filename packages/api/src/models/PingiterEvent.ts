import { EEvents } from '../enums/events';
import { PingiterLogItem } from './PingiterLog';

export interface PingiterEventCallback {
  (type: EEvents, log: PingiterLogItem, logs: Array<PingiterLogItem>): any;
}
