import './components';
import styles from './index.css';

export { Component, css, html } from './helpers';

const globalStyles = document.head.querySelector('style[data-global-styles]');

if (!globalStyles) {
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}
