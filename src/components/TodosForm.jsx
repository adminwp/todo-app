import React from 'react';
import {
	Button,
	ButtonGroup,
	Container,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	Row,
} from 'react-bootstrap';
const TodosForm = ({ actions }) => {
	const { todosFormHandler, todoInputHandler } = actions;
	return (
		<Container>
			<Form className='pt-5' onSubmit={todosFormHandler}>
				<Row>
					<h1>Todos Form</h1>
				</Row>
				<Row>
					<FormGroup className='mb-3'>
						<FormLabel>Todo Title :</FormLabel>
						<FormControl
							name='title'
							onChange={todoInputHandler}
							placeholder='Todo Title'
						></FormControl>
					</FormGroup>

					<FormGroup className='mb-3'>
						<FormLabel>Todo Body :</FormLabel>
						<FormControl
							name='body'
							onChange={todoInputHandler}
							placeholder='Todo Body'
						></FormControl>
					</FormGroup>

					<ButtonGroup className='mb-3'>
						<Button
							type='submit'
							variant='primary'
							className='p-3'
							style={{ fontSize: '1.2rem' }}
						>
							Add Todo
						</Button>
					</ButtonGroup>
				</Row>
			</Form>
		</Container>
	);
};

export default TodosForm;
