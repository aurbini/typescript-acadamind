"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the Todo', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const { updatedText } = req.body;
    console.log(id);
    const updatedIndex = TODOS.findIndex((todo) => id == todo.id);
    if (updatedIndex < 0) {
        throw new Error('Could not find todo!');
    }
    else {
        TODOS[updatedIndex] = new todo_1.Todo(TODOS[updatedIndex].id, updatedText);
    }
    res
        .status(201)
        .json({ message: 'updated todo', updatedtodos: TODOS[updatedIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const deleteIndex = TODOS.findIndex((todo) => id == todo.id);
    if (deleteIndex < 0) {
        throw new Error('Could not delete todo');
    }
    TODOS.splice(deleteIndex, 1);
    res.json({ message: 'deleted todo', todos: TODOS });
};
exports.deleteTodo = deleteTodo;
