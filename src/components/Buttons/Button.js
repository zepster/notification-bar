import template from './button.html';

/**
 * Button
 * @property {string} template
 */
export default class Button {
  /**
   * 
   * @param {object} options - list of options
   * @param {object} options.Text - Text component
   * @param {object} options.config - button config
   * @param {string} options.config.buttonUrl - button Url
   * @param {string} options.config.openNewTab - Clicking button will open in new tab
   * @param {boolean} options.config.wiggleButton - true - “Wiggle” button animation enabled (​https://daneden.github.io/animate.css/)​
   * @param {boolean} options.config.buttonBackgroundColor - true - “Wiggle” button animation enabled (​https://daneden.github.io/animate.css/)​
   */
  constructor(options) {
    this.template = template;
  }
};