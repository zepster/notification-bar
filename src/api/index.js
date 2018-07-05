import { serverResponse } from '@/mock';
import config from '@/config';

/**
 * Test
 */
// export function loadConfig(token) {
//   return new Promise(res => setTimeout(() => res([
//     serverResponse, Object.assign({}, serverResponse, { placement: 'bottom', wiggleButton: false }),
//   ])), 1500);
// }

export function loadConfig(token) {
  return fetch(`${config.API_URL}${config.ENDPOINTS.GET_CONFIG(token)}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.statusText);
    })
    .catch(err => {
      // console.log(err)
    })
}
