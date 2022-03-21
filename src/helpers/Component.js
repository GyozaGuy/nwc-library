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

  render() {
    return '<slot></slot>';
  }

  update() {
    this.shadowRoot.innerHTML = `
      ${this.constructor.styles || ''}
      ${this.render()}
    `;
  }
}
