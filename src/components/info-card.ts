import { LitElement, html, css } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';

@customElement('info-card')
export default class InfoCard extends LitElement {

	@property()
	text = "";

	@property()
	subtext = "";

	constructor() {
		super();
	}

	static get styles() {
		return css`
			.card {
				cursor: pointer;
				width: 500px;
				height: 64px;
				background: white;
				border-radius: 5px;
				box-shadow: 0px 4px 10px rgba(0, 0, 0, .3);
				padding-left: 16px;
				padding-right: 16px;
				box-sizing: border-box;
			}

			.text {
				display: inline-block;
				font-family: monospace;
				padding-top: 9px;
				font-size: 18px;
				font-weight: 400;
				opacity: 0.8;
			}

			.subtext {
				display: inline-block;
				font-family: monospace;
				padding-top: 3px;
				font-size: 15px;
				font-weight: 400;
				opacity: 0.7;
			}

			.children {
				float: right;
				height: 64px;
				display: grid;
				place-items: center;
				font-size: 20px;
				font-weight: 400;
			}
		`;
	}

	render() {
		return html`
			<div class="card">
				<span class="text">${this.text}</span><br>
				<span class="subtext">${this.subtext}</span>
			</div>
		`;
	}
}