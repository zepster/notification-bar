import { loadConfig } from './api';
import { APP_NAME } from './constants';
import { makeBar } from './componentFactory';
import './main.css';

const elements = {};

export function closeBar(id) {
  elements[id] && elements[id].destroy();
}

/**
 * App was init
 */
function appInitTrigger() {
  window.dispatchEvent(new Event(`${APP_NAME}.init`))
};

/**
 * 
 * @param {string} token api token
 * @param {boolean} showAfterLoad show bar after
 */
function load(token) {
  return loadConfig(token).then((config) => {
    for (let i = 0; i < config.length; i += 1) {
      elements[i] = makeBar(config[i], i);
      elements[i].show();
    }
    return Promise.resolve();
  });
};

window[APP_NAME] = {
  closeBar,
  load,
  elements
};

appInitTrigger();
