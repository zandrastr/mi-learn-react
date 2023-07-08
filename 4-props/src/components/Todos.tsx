import { Todo } from '../models/Todo';

interface ITodosProps {
  listOfTodos: Todo[];
}

export const Todos = ({ listOfTodos }: ITodosProps) => {
  const html = listOfTodos.map((oneTodo) => <li key={oneTodo.id}>{oneTodo.text}</li>);

  return <ul>{html}</ul>;
};
