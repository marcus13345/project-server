import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import './view-container.js';
// import './lib/api.js'

@customElement('project-server')
export default class ProjectServer extends LitElement {
	
	@property()
	name = 'Unknown';

	// static get styles() {
	// 	return css`
	// 		.root {
	// 			font-size: 0px;
	// 		}
	// 	`;
	// }
	constructor() {
		super();
		(this as any)._saveInstanceProperties();
	}

	async firstUpdated() {
		this.name = await new Promise(res => {
			setTimeout(_ => {
				res('fuuuuck');
			}, 1000)
		})
	}

	render() {
		return html`
			<div class="root">
				${this.name}
			</div>
		`;
	}
}