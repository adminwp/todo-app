import PropTypes from 'prop-types';
import React from 'react';
import { Container, ListGroup, Row } from 'react-bootstrap';
import Todo from './Todo';
const TodosList = ({ todos, actions: { deleteButtonHandler } }) => {
	return (
		<Container>
			<Row>
				<ListGroup>
					{todos.map((todo) => (
						<Todo
							deleteButtonHandler={deleteButtonHandler}
							key={todo.id}
							{...todo}
						/>
					))}
				</ListGroup>
			</Row>
		</Container>
	);
};

TodosList.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default TodosList;
