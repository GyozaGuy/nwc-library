import { Component, css, html } from '../../helpers';
import styles from './UiButton.css';

class UiButton extends Component {
  static styles = css`
    ${styles}
  `;
  href = '';
  target = '';

  connected() {
    this.href = this.getAttribute('href');
    this.target = this.getAttribute('target');
    this.update();
  }

  render() {
    if (this.href) {
      return html`<a href="${this.href}" id="button" target="${this.target}"><slot></slot></a>`;
    }

    return html`<button id="button" type="button"><slot></slot></button>`;
  }
}

customElements.define('ui-button', UiButton);
