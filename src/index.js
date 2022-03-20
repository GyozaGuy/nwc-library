import './components';
import styles from './index.css';

const globalStyles = document.head.querySelector('style[data-global-styles]');

if (!globalStyles) {
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
}
