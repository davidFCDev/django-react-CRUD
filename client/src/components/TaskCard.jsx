import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task }) => {
	const navigate = useNavigate();
	return (
		<div
			className='bg-zinc-800 p-5 hover:bg-zinc-700 cursor-pointer flex flex-col gap-2 rounded'
			onClick={() => navigate('/tasks/' + task.id)}
		>
			<h1 className='text-2xl font-semibold'>{task.title}</h1>
			<div className='flex flex-col'>
				<p className='font-light'>{task.description}</p>
			</div>
		</div>
	);
};

export default TaskCard;
