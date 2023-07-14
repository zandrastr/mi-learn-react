import { useState } from 'react';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  const createTodo = (text: string) => {
    console.log('Create todo', text);

    setTodos([...todos, new Todo(text, false, new Date().getTime())]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddTodo addTodo={createTodo}></AddTodo>
      <Todos listOfTodos={todos} toggle={handleToggle} remove={removeTodo}></Todos>
    </>
  );
};
