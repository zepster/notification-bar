import Icon from '../Icon';
import { APP_NAME } from '@/src/constants';

import template from './icon-button.html';
import './icon-button.css';
const closeSvg = require('@/icons/svg/015-letter-x.svg');

const PLACEHOLDERS = {
  icon: '{%ICON%}',
  AppName: '{%APP_NAME%}',
  id: '{%ID%}'
};

/**
 * Button
 * the X button
 */
export default class IconButton {
  /**
   * 
   * @param {object} options - list of options
   * @param {string} options.icon - icon (probably)
   * @param {string} options.id - bar id
   */
  constructor(options) {
    this.placeholders = {
      [ PLACEHOLDERS.icon ]: new Icon({
        config: { Icon: closeSvg }
      }),
      [ PLACEHOLDERS.AppName ]: APP_NAME,
      [ PLACEHOLDERS.id ]: options.id
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