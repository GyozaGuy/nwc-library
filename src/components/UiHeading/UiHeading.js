import { Component, css, html } from '../../helpers';
import styles from './UiHeading.css';

class UiHeading extends Component {
  static styles = css`
    ${styles}
  `;

  connectedCallback() {
    this.update();
  }

  render() {
    return html`
      <${this.element}><slot></slot></${this.element}>
      <slot name="subheading"></slot>
    `;
  }

  get element() {
    const sizes = { xs: 'h6', sm: 'h5', md: 'h4', lg: 'h3', xl: 'h2', xxl: 'h1' };

    if (!Object.keys(sizes).includes(this.size)) {
      throw new TypeError(`Unknown size: ${this.size}`);
    }

    return sizes[this.size];
  }

  get size() {
    return this.getAttribute('size') || 'xxl';
  }
}

customElements.define('ui-heading', UiHeading);
