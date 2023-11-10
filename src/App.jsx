import React from 'react';
import List from './List.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			submit: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState(state => ({
			submit: [...state.submit, state.value]
		}));
	}

	render() {
		return (
			<div>

				<h1>Todo list:</h1>

				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} />
					<input type="submit" value="Add to list" />
				</form>
				
				<List list={this.state.submit} />

			</div>
		)
	}
}
