import './Card.css';

customElements.define(
  'ui-card',
  class extends HTMLElement {
    connectedCallback() {
      this.style.setProperty('--card-background-color', this.getAttribute('background-color'));
      this.style.setProperty('--card-font-color', this.getAttribute('font-color'));
    }
  }
);
