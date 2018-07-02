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

export function show(Bar) {
  if (element) {
    close();
  }
  element = createWrapper({
    id: ROOT_ELEMENT_ID,
    sticky: true,
    placement: 'top',
    animateEntryExit: false,

  });
  element.innerHTML = Bar;
  window.document.body.appendChild(element);
};

export function close() {
  if (element) {
    destroy(element).then(() => element = null);
  }
}


loadConfig().then((config) => {
  const Bar = createBar(config);
  show(Bar);
});

window[APP_NAME] = {
  show,
  close
};
