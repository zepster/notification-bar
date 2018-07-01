import Line from './components/Bars/Line';
import Button from './components/Buttons/AButton';
import IconButton from './components/Buttons/IconButton';
import Plain from './components/Text/Plain';
import BaseContent from './components/Content/Base';

const Bar = new Line({
  config: {
    sticky: true,
    allowHide: false,
    placement: "top",
    backgroundColor: "#FFFFFF",
    brandingEnabled: true,
    animateEntryExit: true,
  },
  Content: new BaseContent({
    Text: new Plain({
      config: {
        text: 'mainText',
        textColor: '#111111',
      }
    }),
    Button: new Button({
      config: {
        buttonUrl: "https://example.com",
        openNewTab: true,
        wiggleButton: true,
        buttonBackgroundColor: '#AAACCC'
      },
      Text: new Plain({
        config: {
          text: 'buttonText',
          textColor: '#333333',
        }
      }),
    })
  }),
  Text: new Plain({
    config: {
      text: 'mainText',
      textColor: '#111111',
    }
  }),
  CloseButton: new IconButton(),
});

const wrapper = window.document.createElement('div');
wrapper.innerHTML = Bar;
window.document.body.appendChild(wrapper);
