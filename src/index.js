import Line from './components/Bars/Line';
import Button from './components/Buttons/AButton';
import IconButton from './components/Buttons/IconButton';
import Plain from './components/Text/Plain';
import BaseContent from './components/Content/Base';

import './main.css';

export const APP_NAME = 'NINJABAR';
const ROOT_ELEMENT_ID = `ninjabar-wrapper`;
let element = null;

const Bar = new Line({
  config: {
    sticky: false,
    allowHide: true,
    placement: "top",
    backgroundColor: '#FFF',
    brandingEnabled: true,
    animateEntryExit: true,
  },
  Content: new BaseContent({
    Text: new Plain({
      config: {
        text: 'Announce A Sale Or Discount With A Hello Bar Like This. Grab Your FREE Account Today',
        textColor: '#eb5424',
      }
    }),
    Button: new Button({
      config: {
        buttonUrl: "https://example.com",
        openNewTab: true,
        wiggleButton: true,
        buttonBackgroundColor: '#eb5424'
      },
      Text: new Plain({
        config: {
          text: 'Get Started',
          textColor: '#fff',
        }
      }),
    })
  }),
  CloseButton: new IconButton(),
});

export function show() {
  if (element) {
    close();
  }
  element = window.document.createElement('div');
  element.setAttribute('id', ROOT_ELEMENT_ID);
  element.className = 'sticky top fadeInDown';
  element.innerHTML = Bar;
  window.document.body.appendChild(element);
};

export function close() {
  if (element) {
    element.className = element.className.replace('fadeInDown', '');
    element.className = `${element.className} fadeOutUp`;
    setTimeout(() => {
      window.document.body.removeChild(element);
      element = null;
    }, 100);
  }
}

show();

window[APP_NAME] = {
  show,
  close
};
