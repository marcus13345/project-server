import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('view-container')
export default class ProjectServer extends LitElement {
	
	@property()
	name = 'Unknown';

	static get styles() {
		return css`
			:root {
				background: red;
				width: 100px;
				height: 100px;

			}
		`;
	}

	render() {
		console.log('rendered');
		return html`
			<div class="root">
			</div>
		`;
	}
}