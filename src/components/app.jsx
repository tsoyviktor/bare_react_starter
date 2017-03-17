import React from 'react';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			combination: ''
		}
		this.clickHandler = this.clickHandler.bind(this)
	}

	clickHandler (event) {
		let password = this.pass.value;
		let email = this.email.value;	
		this.setState({
			combination: 'name: ' + this.email.value + ' pass: ' + this.pass.value
		});
	}

	render() {
		return (
			<div>
				<input type="text" name="email" ref={(email) => this.email = email} />
				<input type="text" name="password" ref={(pass) => this.pass = pass} />

				<button onClick={this.clickHandler}> send </button>
				<hr />
				<h3>{this.state.combination}</h3>
			</div>	
		)
	}
}

