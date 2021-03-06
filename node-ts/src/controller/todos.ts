import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the Todo', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  console.log(id);
  const updatedIndex = TODOS.findIndex((todo) => id == todo.id);
  if (updatedIndex < 0) {
    throw new Error('Could not find todo!');
  } else {
    TODOS[updatedIndex] = new Todo(TODOS[updatedIndex].id, updatedText);
  }
  res
    .status(201)
    .json({ message: 'updated todo', updatedtodos: TODOS[updatedIndex] });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const deleteIndex = TODOS.findIndex((todo) => id == todo.id);
  if (deleteIndex < 0) {
    throw new Error('Could not delete todo');
  }
  TODOS.splice(deleteIndex, 1);

  res.json({ message: 'deleted todo', todos: TODOS });
};
