import { createBar } from './components/Bars/factory';
import { createWrapper, destroy } from './wrapper';

export function makeBar(config, id) {
  switch(config.type) {
    case 'notification':
      return {
        bar: createBar(config, id),
        wrapper: null,
        createWrapper() {
          this.wrapper = createWrapper({
            id: id,
            sticky: config.sticky,
            placement: config.placement,
            animateEntryExit: config.animateEntryExit,
          })
        },
        show() {
          this.createWrapper();
          this.wrapper.innerHTML = this.bar;
          window.document.body.appendChild(this.wrapper);
        },
        destroy() {
          if (this.wrapper) {
            destroy(this.wrapper).then(() => this.wrapper = null);
          }
        }
      }
    default:
      return {
        show() {},
        destroy() {},
      }
  }
};