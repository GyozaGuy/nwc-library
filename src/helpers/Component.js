export default class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      ${this.constructor.styles}
      ${this.render()}
    `;
  }

  connectedCallback() {
    this.connected();
  }

  disconnectedCallback() {
    this.disconnected();
  }

  connected() {}

  disconnected() {}

  render() {
    return '<slot></slot>';
  }

  update() {
    this.shadowRoot.innerHTML = this.render();
  }
}
