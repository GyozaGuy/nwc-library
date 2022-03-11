customElements.define(
  'ui-layout-band',
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            background-color: var(--layout-band-background-color);
            color: var(--layout-band-font-color);
            display: block;
            padding: var(--padding-size);
            padding-left: 0;
            padding-right: 0;
            position: relative;
            width: 100%;
          }

          :host > section {
            margin: auto;
            max-width: 60%;
          }

          :host[size="xs"] > section {
            max-width: 40%;
          }

          :host[size="sm"] > section {
            max-width: 50%;
          }

          :host[size="lg"] > section {
            max-width: 70%;
          }

          :host[size="xl"] > section {
            max-width: 80%;
          }

          :host[size="xxl"] > section {
            max-width: 90%;
          }
        </style>
        <section><slot></slot></section>
      `;
    }

    connectedCallback() {
      this.style.setProperty(
        '--layout-band-background-color',
        this.getAttribute('background-color')
      );
      this.style.setProperty('--layout-band-font-color', this.getAttribute('font-color'));
    }
  }
);
