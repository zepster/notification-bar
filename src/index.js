import Line from './components/Bars/Line';
import Button from './components/Buttons/AButton';
import IconButton from './components/Buttons/IconButton';
import Plain from './components/Text/Plain';
import BaseContent from './components/Content/Base';

const Bar = new Line({
  config: {
    sticky: true,
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
  Text: new Plain({
    config: {
      text: 'mainText',
      textColor: '#111111',
    }
  }),
  CloseButton: new IconButton(),
});

function showNotificationBar() {
  const wrapper = window.document.createElement('div');
  wrapper.innerHTML = Bar;
  window.document.body.appendChild(wrapper);
};

setTimeout(() => {
  showNotificationBar()
}, 0)
