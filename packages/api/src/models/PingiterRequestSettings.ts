import { Everbs } from '../enums/http';

export interface PingiterRequestSettings {
  iterations: number;
  url: string;
  verb: Everbs;
  headers: { [key: string]: string };
  data?: { [key: string]: any };
  timeout?: number; // Optional timeout in milliseconds
}
