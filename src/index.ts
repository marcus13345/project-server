import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './view-container.js';

@customElement('project-server')
export default class ProjectServer extends LitElement {
	
	@property()
	name = 'Unknown';

	static get styles() {
		return css`
			:root {
				background: red;
				color: white;
			}

			.box {
				background: green;
				width: 100px;
				height: 100px;
			}
		`;
	}

	render() {
		console.log('rendered');
		return html`
			<div class="coolStuff">
				<view-container title="1"></view-container>
				<view-container title="2"></view-container>
				<view-container title="3"></view-container>
				<view-container title="4"></view-container>
			</div>
		`;
	}
}