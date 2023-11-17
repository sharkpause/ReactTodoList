export default function Form(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<input type="text" onChange={props.handleFormInput} />
				<input type="submit" value="Add to list" />
			</form>
		</div>
	);
}
