import template from './base.html';
import './base.css';

const PLACEHOLDERS = {
  Text: '{%TEXT%}',
  Button: '{%BUTTON%}',
};

/**
 * Text
 */
export default class Base {
  /**
   * 
   * @param {object} options - list of options
   * @param {object} options.Text - Text component
   * @param {object} options.Button - Button component
   */
  constructor(options) {
    this.placeholders = {
      [ PLACEHOLDERS.Text ] : options.Text || '',
      [ PLACEHOLDERS.Button ] : options.Button || '',
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
