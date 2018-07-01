import template from './plain.html';

const PLACEHOLDERS = {
  text: '{%TEXT%}',
  textColor: '{%TEXT_COLOR%}',
};

/**
 * Text
 */
export default class Plain {
  /**
   * 
   * @param {object} options - list of options
   * @param {object} options.config - Text config
   * @param {string} options.config.text - Text
   * @param {string} options.config.textColor - Text color
   */
  constructor(options) {
    this.placeholders = {
      [ PLACEHOLDERS.text ] : options.config.text || '',
      [ PLACEHOLDERS.textColor ] : options.config.textColor || 'black',
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
