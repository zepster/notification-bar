import Line from './Line';
import BaseContent from '../Content/Base';
import Button from '../Buttons/AButton';
import IconButton from '../Buttons/IconButton';
import Plain from '../Text/Plain';

export function createBar(config, id) {
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
    CloseButton: new IconButton({
      id
    }),
  });
};
