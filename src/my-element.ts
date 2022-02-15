import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  countBy = 2;

  private onIncrement(e: CustomEvent) {
    console.log('~~ parent got an onIncrement', e.detail);
  }

  private _countByChange(e: Event) {
    if (e.target) {
      console.log((e.target as HTMLFormElement).value)
      this.countBy = parseInt((e.target as HTMLFormElement).value)
    }
  }

  render() {
    // Doing the selected attributes took me a while!
    // Found solution under Boolean attribute expressions : https://lit.dev/docs/templates/expressions/#boolean-attribute-expressions
    return html`
    <p>Lit Discovery!</p>
    <p>Counting by ${this.countBy}.</p>
    <select @change="${this._countByChange}">
      <option ?selected=${this.countBy == 1} value="1">1</option>
      <option ?selected=${this.countBy == 2} value="2">2</option>
      <option ?selected=${this.countBy == 5} value="5">5</option>
    </select>
    <nested-element countBy="${this.countBy}" @increment="${this.onIncrement}"></nested-element>
    `;
  }
}
