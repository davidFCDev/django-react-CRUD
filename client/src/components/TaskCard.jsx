import React from 'react';

const TaskCard = ({ task }) => {
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			<p>{task.done === true ? 'Completed' : 'Incompleted'}</p>
		</div>
	);
};

export default TaskCard;
