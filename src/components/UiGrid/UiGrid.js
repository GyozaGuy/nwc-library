import { Component, css } from '../../helpers';
import styles from './UiGrid.css';

class UiGrid extends Component {
  static styles = css`
    ${styles}
  `;

  connected() {
    this.style.setProperty('--ui-grid-columns', this.getAttribute('columns'));
  }
}

customElements.define('ui-grid', UiGrid);
