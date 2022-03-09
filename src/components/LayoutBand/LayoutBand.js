import './LayoutBand.css';

customElements.define(
  'ui-layout-band',
  class extends HTMLElement {
    connectedCallback() {
      this.style.setProperty(
        '--layout-band-background-color',
        this.getAttribute('background-color')
      );
      this.style.setProperty('--layout-band-font-color', this.getAttribute('font-color'));
    }
  }
);
