import Icon from '../Icon';

const closeSvg = require('@/icons/svg/015-letter-x.svg');

import template from './line.html';
import './line.css';

const PLACEHOLDERS = {
  Content: '{%CONTENT%}',
  BrandLogo: '{%BRAND_LOGO%}',
  backgroundColor: '{%BG_COLOR%}',
  CloseButton: '{%CLOSE_BUTTON%}',
  allowHide: '{%ALLOW_HIDE%}',
  brandingEnabled: '{%BRANDING_ENABLED%}',
};

/**
 * Bar
 * @property {string} template
 */
export default class Line {
  /**
   * 
   * @param {object} options - list of options
   * @param {object} options.Content - Content component
   * @param {object} options.CloseButton - Button component
   * @param {object} options.BrandLogo - Component
   * @param {object} options.config - bar config
   * @param {boolean} options.config.sticky - Does the bar stick to the top of the page
   * @param {string} options.config.placement - Bar to show at the top or the bottom of the screen
   * @param {boolean} options.config.allowHide - Users can hide the notification bar by click the X button
   * @param {string} options.config.backgroundColor
   * @param {boolean} options.config.brandingEnabled - Show ninjaconvert logo inside notification bar
   * @param {boolean} options.config.animateEntryExit - (​https://daneden.github.io/animate.css/)​
   */
  constructor(options) {
    this.placeholders = {
      [ PLACEHOLDERS.Content ]: options.Content || '',
      [ PLACEHOLDERS.CloseButton ]: options.CloseButton || '',
      [ PLACEHOLDERS.BrandLogo ]: new Icon({ config: { Icon: closeSvg } }),
      [ PLACEHOLDERS.backgroundColor ]: options.config.backgroundColor || "#fff",
      [ PLACEHOLDERS.allowHide ]: options.config.allowHide ? '' : 'hellobar__close--hidden',
      [ PLACEHOLDERS.brandingEnabled ]: options.config.brandingEnabled ? '' : 'hellobar__brang-logo--hidden',
    };
  }

  /**
   * @returns {string} string template
   */
  renderToString() {
    return Object.keys(this.placeholders)
      .reduce((template, placeholder) => {
        return template.replace(placeholder, this.placeholders[placeholder]);
      }, template);
  }

  toString() {
    return this.renderToString();
  }
};
