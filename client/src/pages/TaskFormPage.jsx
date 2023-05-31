import React from 'react';
import { useForm } from 'react-hook-form';
import { createTask } from '../api/task.api';
import { useNavigate } from 'react-router-dom';

const TaskFormPage = () => {
	const { register, handleSubmit, formState: errors } = useForm();
	const navigate = useNavigate();

	const onSubmit = handleSubmit(async data => {
		await createTask(data);
		navigate('/tasks');
	});

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='title'
					placeholder='Write a Task'
					{...register('title', { required: true })}
				/>
				{errors.title && <span>Title is required</span>}
				<textarea
					rows={3}
					name='description'
					placeholder='Write a Description'
					{...register('description', { required: true })}
				></textarea>
				{errors.description && <span>Description is required</span>}
				<button type='submit'>Save</button>
			</form>
		</div>
	);
};

export default TaskFormPage;
