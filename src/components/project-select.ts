import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import api from '../lib/api';
import Project from '../lib/Project';

@customElement('project-select')
export default class ProjectSelect extends LitElement {

	@state()
	private projects: Project[] = [];

	private timeout: NodeJS.Timeout = null;

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
		this.getProjects();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if(this.timeout !== null) {
			clearTimeout(this.timeout);
		}
	}

	async getProjects() {
		this.timeout = setTimeout(async () => {
			this.projects = await api.v1.projects.get();
			console.log(this.projects)
			if(this.isConnected) this.getProjects();
		}, 1000);
	}

	static get styles() {
		return css`
		`;
	}

	render() {
		return html`
			<div class="root">
				<p>Project Select</p>
				${this.projects.map(project => html`
					<info-card text=${project.name} subtext=${project.location}></info-card>
				`)}
			</div>
		`;
	}
}