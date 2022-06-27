import { AxiosError } from 'axios';
import { Everbs } from '../enums/http';

export interface PingiterLogItem {
  url: string;
  verb: Everbs;
  headers: { [key: string]: string };
  metas: PingiterLogItemMeta;
  formatted: string;
  failed?: boolean;
  error?: AxiosError;
}

export interface PingiterLogItemMeta {
  index: number;
  number?: string;
  status?: string;
  statusCode?: number;
  statusOk?: boolean;
  duration?: number;
  durationUnit?: string;
  size?: string;
  data?: { [key: string]: string };
}

export interface PingiterLogItemFailedMessage {
  formatted: string;
  status?: string;
  statusText?: string;
}
