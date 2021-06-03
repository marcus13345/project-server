import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import api from '../lib/api';
import Project from '../lib/Project';

@customElement('project-select')
export default class ProjectSelect extends LitElement {

	@state()
	private projects: Project[] = [];

	private timeout: NodeJS.Timeout = null;

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
			if(this.isConnected) this.getProjects();
		}, 1000);
	}

	async createProject() {

	}

	static get styles() {
		return css`
			.projects th {
				text-align: left;
			}
			.projects {
				width: 100%;
				padding: 0px 16px;
			}
		`;
	}

	render() {
		return html`
			<div class="root">
				<p>Project Select</p>
				<table class="projects">
					<tr>
						<th>Name</th>
						<th>Location</th>
						<th>go</th>
					</tr>
					${this.projects.map(project => html`
						<tr>
							<td>${project.name}</td>
							<td>${project.location}</td>
							<td><a href="#" @click=${this.dispatchEvent.bind(this, new CustomEvent('select', {detail: project}))}>Open</a></td>
						</tr>
					`)}
					<tr id="new">
						<td><input type="text" id="name"/></td>
						<td></td>
						<td><a href="#" @click=${this.createProject.bind(this)}>Create</a></td>
					</tr>
				</table>
			</div>
		`;
	}
}