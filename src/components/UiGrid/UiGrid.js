import { Component, css } from '../../helpers';
import styles from './UiGrid.css';

class UiGrid extends Component {
  static styles = css`
    ${styles}
  `;

  connectedCallback() {
    let gapValue = this.getAttribute('gap');

    if (gapValue) {
      if (/\d$/.test(gapValue)) {
        gapValue += 'px';
      }

      this.style.setProperty('--gap', gapValue);
    }
  }
}

customElements.define('ui-grid', UiGrid);
