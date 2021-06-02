import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';

@customElement('template')
export default class Template extends LitElement {

	constructor() {
		super();
	}

	static get styles() {
		return css`
			
		`;
	}

	render() {
		return html`
			<div class="root">
				
			</div>
		`;
	}
}