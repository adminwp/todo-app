import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodosForm from './TodosForm';
import TodosList from './TodosList';
const Todos = () => {
	const navigate = useNavigate();
	const [todos, setTodos] = useState([]);

	const [todo, setTodo] = useState({ title: '', body: '' });

	const getTodos = async () => {
		try {
			const request = await fetch('http://localhost:3000/todos', {
				method: 'get',
			});

			const todos = await request.json();

			return todos;
		} catch (error) {
			console.error(error);
		}
	};

	const addTodoHandler = async (todo) => {
		try {
			const sendTodo = await fetch('http://localhost:3000/todos', {
				method: 'post',
				body: JSON.stringify(todo),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});

			const response = await sendTodo.json();

			return response;
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodoHandler = async (todoID) => {
		try {
			const sendTodo = await fetch(`http://localhost:3000/todos/${todoID}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			});

			const response = await sendTodo.json();

			return response;
		} catch (error) {
			console.error(error);
		}
	};

	const todosFormHandler = (e) => {
		e.preventDefault();

		const isValid = todo.title !== '' && todo.body !== '';

		if (isValid) {
			addTodoHandler(todo)
				.then((res) => {
					console.log('res', res);
					// navigate('/');
					navigate(0);
				})
				.catch((err) => console.error(err));
		}

		console.log('add todo handler');
	};

	const todoInputHandler = (e) => {
		console.log(e.target);

		setTodo((todo) => ({
			...todo,
			[e.target.name]: e.target.value.trim(),
		}));
	};

	const deleteButtonHandler = (id) => {
		console.log('id todo', id);
		deleteTodoHandler(id)
			.then((res) => {
				navigate(0);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getTodos()
			.then((todos) => {
				if (todos.length > 0) {
					setTodos(todos);
				}
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		console.log('todo', todo);
	}, [todo]);

	return (
		<>
			<TodosForm
				actions={{
					todosFormHandler,
					todoInputHandler,
				}}
			/>

			{todos.length && todos.length > 0 ? (
				<TodosList actions={{ deleteButtonHandler }} todos={todos} />
			) : (
				<h1 className="text-center">todo not found</h1>
			)}
		</>
	);
};

export default Todos;
