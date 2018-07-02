import { serverResponse } from '@/mock';
import config from '@/config';

export function loadConfig() {
  return new Promise(res => setTimeout(() => res(serverResponse)), 1500);
}
