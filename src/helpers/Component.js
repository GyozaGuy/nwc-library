import { clearChildren, fhtml } from '.';

export default class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.update();
  }

  connectedCallback() {
    for (const slot of this.shadowRoot.querySelectorAll('slot')) {
      slot.addEventListener('slotchange', ({ target }) => this.handleChildrenUpdated(target));
    }

    this.connected();
  }

  disconnectedCallback() {
    this.disconnected();
  }

  connected() {}

  disconnected() {}

  handleChildrenUpdated() {}

  populateReferences() {
    function checkAttrs(element) {
      if (!this) {
        return;
      }

      for (const child of element.children) {
        if (['SLOT', 'STYLE'].includes(child.tagName)) {
          continue;
        }

        for (const { name, value } of child.attributes) {
          if (name === 'id') {
            this[value] = child;
          }

          if (name.startsWith('#')) {
            this[name.substr(1)] = child;
            child.removeAttribute(name);
          }

          if (name.startsWith('on')) {
            child.addEventListener(name.substr(2), this[value].bind(this));
            child.removeAttribute(name);
          }
        }

        checkAttrs.call(this, child);
      }
    }

    checkAttrs.call(this, this.shadowRoot);
  }

  render() {
    return '<slot></slot>';
  }

  update() {
    const fragment = fhtml`
      ${this.constructor.styles || ''}
      ${this.render()}
    `;

    clearChildren(this.shadowRoot);
    this.shadowRoot.appendChild(fragment);
    this.populateReferences();
  }
}
