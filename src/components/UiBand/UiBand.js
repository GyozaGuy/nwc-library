import { Component, css, html } from '../../helpers';
import styles from './UiBand.css';

class UiBand extends Component {
  static styles = css`
    ${styles}
  `;

  connected() {
    this.style.setProperty('--ui-band-background-color', this.getAttribute('background-color'));
    this.style.setProperty('--ui-band-font-color', this.getAttribute('font-color'));
  }

  render() {
    return html`<section><slot></slot></section>`;
  }
}

customElements.define('ui-band', UiBand);
