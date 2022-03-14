export default class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      ${this.constructor.styles}
      ${this.render()}
    `;
  }

  render() {
    return '';
  }
}
