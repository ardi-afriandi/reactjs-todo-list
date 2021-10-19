import React, { useState } from 'react';
import './TodoCreate.css';
import { v4 as uuid } from 'uuid';

const TodoCreate = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
    };

    props.onCreateTodo(newTodo);
    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
