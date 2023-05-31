import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<div>
			<Link to='/tasks'>
				<h1>Task App</h1>
			</Link>
			<Link to='/tasks-create'>
				<h1>Create task</h1>
			</Link>
		</div>
	);
};
