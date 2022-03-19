import { Component, css } from '../../helpers';
import styles from './UiCard.css';

class UiCard extends Component {
  static styles = css`
    ${styles}
  `;

  connected() {
    this.style.setProperty('--ui-card-background-color', this.getAttribute('background-color'));
    this.style.setProperty('--ui-card-font-color', this.getAttribute('font-color'));
  }
}

customElements.define('ui-card', UiCard);
