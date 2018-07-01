import template from './a-button.html';
import './a-button.css';

const PLACEHOLDERS = {
  Text: '{%TEXT%}',
  buttonBackgroundColor: '{%BG_COLOR%}',
};

/**
 * Button
 * @property {string} template
 */
export default class AButton {
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
    this.placeholders = {
      [ PLACEHOLDERS.Text ] : options.Text,
      [ PLACEHOLDERS.buttonBackgroundColor ] : options.config.buttonBackgroundColor,
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