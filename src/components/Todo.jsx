import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';

const Todo = ({ title, body, id, deleteButtonHandler }) => {
	return (
		<ListGroupItem className='mb-4' data-id={id}>
			<header className='d-flex align-items-center justify-content-between'>
				<h3>{title}</h3>
				<Button
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						if (confirm('Are Your Sure ?')) {
							deleteButtonHandler(id);
						}
					}}
					variant='danger'
				>
					DELETE
				</Button>
			</header>

			<p>{body}</p>
		</ListGroupItem>
	);
};

export default Todo;
