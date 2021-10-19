import React, { useState } from 'react';
import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' }]);

  const eventCreateTodo = (todo) => {
    setTodos(todos.concat(todo));
    console.log(todos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
