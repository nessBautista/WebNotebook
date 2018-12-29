import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../modal-box';
/**
 * @customElement
 * @polymer
 */
class SimpleApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          border: 1px solid red;
          padding: 10px;
        }
        h2 {
          font-size: 0.9em;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p> Another paragraph</p>
      <button on-click="doClick">click</button>
      [[contador]]
      <modal-box id="modal">
        <h2>Modal Box con slot</h2>
        <p>Este es el contenido del modal</p>
        <p>Podemos poner varias lineas y cualquier contenido en general</p>
      </modal-box>
      <button on-click="abrirModal">Abrir modal</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'World'
      },
      contador:{
        type: Number,
        value: 0
      }
    };
  }

  doClick() {
    this.prop1= "Aprendiendo polymer"
    this.contador++;
  }

  abrirModal(){
    this.$.modal.open();
  }
}

window.customElements.define('simple-app', SimpleApp);
