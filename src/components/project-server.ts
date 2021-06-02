import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import Project from '../lib/Project';

@customElement('project-server')
export default class ProjectServer extends LitElement {

	@state()
	private project: Project = null;

	constructor() {
		super();
	}

	selectProject(project) {
		this.project = project;
	}

	render() {
		return html`
			<div class="root">
				<p>Project Server</p>
				${this.project ? html`
					<project-view .project=${this.project}></project-view>
				` : html`
					<project-select @select=${this.selectProject.bind(this)}></project-select>
				`}
			</div>
		`;
	}
}