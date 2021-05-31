import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './view-container.js';
import './lib/api.js'

@customElement('project-server')
export default class ProjectServer extends LitElement {
	
	@property()
	name = 'Unknown';

	static get styles() {
		return css`
			.root {
				font-size: 0px;
			}
		`;
	}

	render() {
		return html`
			<div class="root">
				<view-container title="1"></view-container>
			</div>
		`;
	}
}