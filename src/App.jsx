import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			submit: []
		};

		this.handleFormInput = this.handleFormInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(index) {
		let updatedSubmit = JSON.parse(JSON.stringify(this.state.submit));

		if(updatedSubmit.length > 1) {
			updatedSubmit.splice(index, 1);
		} else {
			updatedSubmit = [];
		}
		this.setState(state => ({
			submit: updatedSubmit
		}));
	}

	handleFormInput(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState(state => ({
			submit: [...state.submit, state.value],
			value: ''
		}));

		event.target[0].value = '';
	}

	render() {
		return (
			<div>

				<h1>Todo list:</h1>

				<Form handleFormInput={this.handleFormInput} handleSubmit={this.handleSubmit} />

				<List list={this.state.submit} handleDelete={this.handleDelete} />

			</div>
		)
	}
}
