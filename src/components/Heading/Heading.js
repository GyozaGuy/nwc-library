import { clearChildren } from '../../helpers';
import './Heading.css';

customElements.define(
  'ui-heading',
  class extends HTMLElement {
    connectedCallback() {
      this.size = this.getAttribute('size') || 'xxl';
      this.subheading = this.getAttribute('subheading');

      setTimeout(() => {
        const heading = this.textContent;
        clearChildren(this);
        this.content = heading;
      });
    }

    set content(text) {
      const fragment = document.createDocumentFragment();
      const element = document.createElement(getElement(this.size));

      element.textContent = text;
      fragment.appendChild(element);

      if (this.subheading) {
        const subheading = document.createElement('h4');
        subheading.textContent = this.subheading;
        fragment.appendChild(subheading);
      }

      this.appendChild(fragment);
    }
  }
);

function getElement(size) {
  const sizes = { xs: 'h6', sm: 'h5', md: 'h4', lg: 'h3', xl: 'h2', xxl: 'h1' };

  if (!Object.keys(sizes).includes(size)) {
    throw new TypeError(`Unknown size: ${size}`);
  }

  return sizes[size];
}
