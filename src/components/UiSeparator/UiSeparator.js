import { Component, css } from '../../helpers';
import styles from './UiSeparator.css';

class UiSeparator extends Component {
  static styles = css`
    ${styles}
  `;
}

customElements.define('ui-separator', UiSeparator);
