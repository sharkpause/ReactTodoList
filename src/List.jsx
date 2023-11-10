export default function List(props) {
	return (
		<ol>
			{props.list.map(item => ( <li key={item}>{item}</li> ))}
		</ol>
	);
}
