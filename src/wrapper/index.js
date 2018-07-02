const STICKY_CLASS = 'sticky';
const PLACEMENT_TOP_CLASS = 'top';
const PLACEMENT_BOTTOM_CLASS = 'bottom';
const ENTRY_ANIMATION_CLASS = 'fadeInDown';
const EXIT_ANIMATION_CLASS = 'fadeOutUp';

/**
 * 
 * @param {object} config 
 * @param {string} config.id Element id
 * @param {boolean} config.sticky - Does the bar stick to the top of the page
 * @param {('top'|'bottom')} config.placement - Bar to show at the top or the bottom of the screen
 * @param {boolean} config.animateEntryExit - (​https://daneden.github.io/animate.css/)​
 */
export function createWrapper(config) {
  const element = window.document.createElement('div');
  let classes = '';
  element.setAttribute('id', config.id);
  if (config.sticky) {
    classes += ` ${STICKY_CLASS} `;
  }
  if (config.placement === 'top') {
    classes += ` ${PLACEMENT_TOP_CLASS}`;
  } else {
    classes += ` ${PLACEMENT_BOTTOM_CLASS}`;
  }
  if (config.animateEntryExit) {
    classes += ` ${ENTRY_ANIMATION_CLASS}`;
  }
  element.className = classes;

  return element;
}

/**
 * 
 * @param {Element} element 
 */
export function destroy(element) {
  return new Promise(resolve => {
    if (element.className.indexOf(ENTRY_ANIMATION_CLASS) !== -1) {
      element.className = element.className.replace(ENTRY_ANIMATION_CLASS, '');
      element.className = `${element.className} ${EXIT_ANIMATION_CLASS}`;
    }
    setTimeout(() => {
      window.document.body.removeChild(element);
      resolve();
    }, 100);
  })
}
