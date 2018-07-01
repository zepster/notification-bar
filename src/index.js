import Line from './components/Bars/Line';
import Button from './components/Buttons/Button';
import IconButton from './components/Buttons/IconButton';
import Plain from './components/Text/Plain';

new Line({
  config: {
    sticky: true,
    allowHide: false,
    placement: "top",
    backgroundColor: "#FFFFFF",
    brandingEnabled: true,
    animateEntryExit: true,
  },
  Text: new Plain({
    config: {
      text: 'mainText',
      textColor: '#111111',
    }
  }),
  SubmitButton: new Button({
    config: {
      buttonUrl: "https://example.com",
      openNewTab: true,
      wiggleButton: true,
      buttonBackgroundColor: '#AAACCC'
    },
    Text: new Plain({
      text: 'buttonText',
      textColor: '#333333',
    }),
  }),
  CloseButton: new IconButton(),
});
