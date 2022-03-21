import { Component, css, html } from '../../helpers';
import styles from './UiDialog.css';

class UiDialog extends Component {
  static styles = css`
    ${styles}
  `;

  dialog;

  connected() {
    this.dialog = this.shadowRoot.querySelector('dialog');
    const closeDialogButton = this.dialog.querySelector('#closeDialogButton');

    this.dialog.addEventListener('close', () => {
      this.dialog.removeAttribute('opened');
    });

    closeDialogButton.addEventListener('click', () => {
      this.dialog.close();
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
      <dialog>
        <header>
          <slot name="title"></slot>
          <button id="closeDialogButton" type="button">❌</button>
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
