export default function List(props) {
	return (
		<ol>
			{props.list.map((item, index) => (
				<span key={index}>
					<li>{item}</li>
					<button onClick={() => props.handleDelete(index)}>Delete</button>
				</span>
			))}
		</ol>
	);
}
