import template from './icon.html';

const PLACEHOLDERS = {
  Icon: '{%ICON%}',
};

/**
 * Text
 */
export default class Plain {
  /**
   * 
   * @param {object} options - list of options
   * @param {object} options.config - Text config
   * @param {string} options.config.Icon - Icon component
   */
  constructor(options) {
    this.placeholders = {
      [ PLACEHOLDERS.Icon ] : options.config.Icon || '',
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
