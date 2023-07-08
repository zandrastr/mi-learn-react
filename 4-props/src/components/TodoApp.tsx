import { useState } from 'react';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo('A task', false, 1), new Todo('Another task', false, 2)]);

  const handleToggle = (id: number) => {
    console.log('Do toggle in TodoApp, id:', id);

    setTodos(
      todos.map((oneTodo) => {
        if (oneTodo.id === id) {
          return { ...oneTodo, done: !oneTodo.done };
        } else {
          return oneTodo;
        }
      })
    );
  };

  return (
    <>
      <AddTodo></AddTodo>
      <Todos listOfTodos={todos} toggle={handleToggle}></Todos>
    </>
  );
};
