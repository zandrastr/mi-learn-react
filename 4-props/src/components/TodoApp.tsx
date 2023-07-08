import { useState } from 'react';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([new Todo('A task', false, 1), new Todo('Another task', false, 2)]);

  return (
    <>
      <AddTodo></AddTodo>
      <Todos listOfTodos={todos}></Todos>
    </>
  );
};
