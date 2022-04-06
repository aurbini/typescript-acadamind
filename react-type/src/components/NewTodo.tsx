import React, { useRef } from 'react';

import './NewTodo.css';

type newTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<newTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form action='' onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>TodoText</label>
        <input type='text' id='id' ref={textInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
