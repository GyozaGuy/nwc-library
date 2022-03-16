import { Component, css } from '../../helpers';
import styles from './UiGrid.css';

class UiGrid extends Component {
  static styles = css`
    ${styles}
  `;
}

customElements.define('ui-grid', UiGrid);
