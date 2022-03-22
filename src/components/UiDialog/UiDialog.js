import { Component, css, html } from '../../helpers';
import styles from './UiDialog.css';

class UiDialog extends Component {
  static styles = css`
    ${styles}
  `;

  connected() {
    this.dialog.addEventListener('close', () => {
      this.dialog.removeAttribute('opened');
    });

    const dialogObserver = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
          mutation.target.setAttribute('opened', '');
        }
      }
    });

    dialogObserver.observe(this.dialog, { attributes: true });
  }

  render() {
    return html`
      <dialog id="dialog">
        <header>
          <slot name="title"></slot>
          <button id="closeDialogButton" onclick="close" type="button">❌</button>
        </header>

        <div id="content"><slot name="content"></slot></div>
        <footer><slot name="footer"></slot></footer>
      </dialog>
    `;
  }

  close() {
    this.dialog.close();
  }

  showModal() {
    this.dialog.showModal();
  }
}

customElements.define('ui-dialog', UiDialog);
