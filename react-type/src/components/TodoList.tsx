import * as React from 'react';
import { Component } from 'react';

import './TodoList.css';

interface TodolistProps {
  items: { id: string; text: string }[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodolistProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onRemoveTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
