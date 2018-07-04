import { serverResponse } from '@/mock';
import config from '@/config';

export function loadConfig(token) {
  return new Promise(res => setTimeout(() => res([
    serverResponse, Object.assign({}, serverResponse, { placement: 'bottom', wiggleButton: false }),
  ])), 1500);
}
