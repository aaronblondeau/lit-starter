import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('nested-element')
export class NestedElement extends LitElement {
  @property()
  count = 0;

  // This was getting a string value from parent
  // Adding type:Number fixed that.
  @property({type: Number})
  countBy = 1;

  private _increment() {
    this.count += this.countBy;
    const options = {
      detail: {count: this.count},
      bubbles: true,
      composed: true
    }
    this.dispatchEvent(new CustomEvent('increment', options));
  }

  render() {
    return html`
    <button @click="${this._increment}">Click Me (${this.count})</button>
    `;
  }
}
