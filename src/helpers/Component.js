import { clearChildren, fhtml } from '.';

export default class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.update();
  }

  connectedCallback() {
    for (const slot of this.shadowRoot.querySelectorAll('slot')) {
      slot.addEventListener('slotchange', ({ target }) => this.handleChildrenUpdate(target));
    }

    this.connected();
  }

  disconnectedCallback() {
    this.disconnected();
  }

  connected() {}

  disconnected() {}

  handleChildrenUpdate() {}

  populateReferences() {
    function checkAttrs(element) {
      if (!this) {
        return;
      }

      for (const child of element.children) {
        if (['SLOT', 'STYLE'].includes(child.tagName)) {
          continue;
        }

        for (const attr of child.attributes) {
          const { name, value } = attr;

          if (name === 'id') {
            this[value] = child;
          }

          if (name.startsWith('on')) {
            child.addEventListener(name.substr(2), this[value].bind(this));
          }
        }

        checkAttrs.call(this, child);
      }
    }

    checkAttrs.call(this, this.shadowRoot);
  }

  render() {
    return '<slot id="slotr"></slot>';
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
