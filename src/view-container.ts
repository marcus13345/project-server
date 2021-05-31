import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import api from './lib/api';

@customElement('view-container')
export default class ProjectServer extends LitElement {

	@state()
	projects: any[] = [];

	constructor() {
		super();
		this.getProjects();
	}

	static get properties() {
		return {
			projects: {type: Array}
		}
	}

	async getProjects() {
		console.log('thing');
		this.projects = await api.v1.projects.get();
		console.log('BOP', this.projects);
		this.requestUpdate();
	}

	static get styles() {
		return css`
		:root, :host, .root {
			font-size: 16px;
			font-family: monospace;
		}
		`;
	}

	render() {
		return html`
			<div class="root">
				${this.projects.length}
			</div>
		`;
	}
}