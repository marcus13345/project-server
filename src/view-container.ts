import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import api from './lib/api';

@customElement('view-container')
export default class ProjectServer extends LitElement {

	@property()
	projects: string = 'g';

	@property()
	title = "";

	constructor() {
		super();
	}

	connectedCallback() {
		this.getProjects();
	}

	async getProjects() {
		// console.log('thing');
		// this.title = "poop";
		const a: string = await new Promise(res => setTimeout(_ => res('yuh'), 0));
		// const a = await api.v1.projects.get();
		console.log(typeof a);
		console.log(a)
		this.projects = a;
		// console.log('BOP', this.projects);
		// this.requestUpdate();
	}

	static get styles() {
		return css`
		:root, :host, .root {
			font-size: 16px;
			/* font-family; */
		}
		`;
	}

	render() {
		return html`
			<div class="root">
				${this.title}<br>
				${this.projects}
			</div>
		`;
	}
}