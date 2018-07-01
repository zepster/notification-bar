import template from './line.html';
import './line.css';

const PLACEHOLDERS = {
  Content: '{%Content%}',
  backgroundColor: '{%BG_COLOR%}',
  CloseButton: '{%CloseButton%}',
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
      [ PLACEHOLDERS.Content ]: options.Content,
      [ PLACEHOLDERS.CloseButton ]: options.CloseButton,
      [ PLACEHOLDERS.backgroundColor ]: options.config.backgroundColor || "#fff",
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
