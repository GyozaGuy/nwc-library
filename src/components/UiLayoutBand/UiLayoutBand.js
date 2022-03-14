import { Component, css, html } from '../../helpers';
import styles from './UiLayoutBand.css';

class UiLayoutBand extends Component {
  static styles = css`
    ${styles}
  `;

  connectedCallback() {
    this.style.setProperty('--layout-band-background-color', this.getAttribute('background-color'));
    this.style.setProperty('--layout-band-font-color', this.getAttribute('font-color'));
  }

  render() {
    return html`<section><slot></slot></section>`;
  }
}

customElements.define('ui-layout-band', UiLayoutBand);
