import { Component, css } from '../../helpers';
import styles from './UiCard.css';

class UiCard extends Component {
  static styles = css`
    ${styles}
  `;

  connectedCallback() {
    this.style.setProperty('--card-background-color', this.getAttribute('background-color'));
    this.style.setProperty('--card-font-color', this.getAttribute('font-color'));
  }
}

customElements.define('ui-card', UiCard);
