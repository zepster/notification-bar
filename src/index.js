import Line from './components/Bars/Line';
import Button from './components/Buttons/AButton';
import IconButton from './components/Buttons/IconButton';
import Plain from './components/Text/Plain';
import BaseContent from './components/Content/Base';
import { createWrapper, destroy } from './wrapper';
import { loadConfig } from './api';
import './main.css';

export const APP_NAME = 'NINJABAR';
const ROOT_ELEMENT_ID = `ninjabar-wrapper`;
let element = null;

function createBar(config) {
  return new Line({
    config: {
      allowHide: config.allowHide,
      backgroundColor: config.backgroundColor,
      brandingEnabled: config.brandingEnabled,
    },
    Content: new BaseContent({
      Text: new Plain({
        config: {
          text: config.mainText,
          textColor: config.textColor,
        }
      }),
      Button: new Button({
        config: {
          buttonUrl: config.buttonUrl,
          openNewTab: config.openNewTab,
          wiggleButton: config.wiggleButton,
          buttonBackgroundColor: config.buttonBackgroundColor
        },
        Text: new Plain({
          config: {
            text: config.buttonText,
            textColor: config.buttonTextColor,
          }
        }),
      })
    }),
    CloseButton: new IconButton(),
  });
};

export function show(Bar, wrapperConfig) {
  if (element) {
    close();
  }
  element = createWrapper(wrapperConfig);
  element.innerHTML = Bar;
  window.document.body.appendChild(element);
};

export function close() {
  if (element) {
    destroy(element).then(() => element = null);
  }
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
function load(token, showAfterLoad = true) {
  return loadConfig(token).then((config) => {
    const Bar = createBar(config);
    if (showAfterLoad) {
      show(Bar, {
        id: ROOT_ELEMENT_ID,
        sticky: config.sticky,
        placement: config.placement,
        animateEntryExit: config.animateEntryExit,
      });
    }
    return Promise.resolve();
  });
};

window[APP_NAME] = {
  show,
  close,
  load,
};

appInitTrigger();
