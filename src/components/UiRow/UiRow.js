import { Component, css } from '../../helpers';
import styles from './UiRow.css';

class UiRow extends Component {
  static styles = css`
    ${styles}
  `;
}

customElements.define('ui-row', UiRow);
