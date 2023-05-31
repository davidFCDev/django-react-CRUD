import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/task.api';
import TaskCard from './TaskCard';

const TaskList = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		async function loadTasks() {
			const { data } = await getTasks();
			setTasks(data);
		}
		loadTasks();
	}, []);

	return (
		<div className='grid grid-cols-3 gap-3'>
			{tasks.map(task => (
				<TaskCard task={task} key={task.id}/>
			))}
		</div>
	);
};

export default TaskList;
