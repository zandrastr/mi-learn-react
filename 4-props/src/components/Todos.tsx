import { Todo } from '../models/Todo';
import { TodoView } from './TodoView';

interface ITodosProps {
  listOfTodos: Todo[];
  toggle: (id: number) => void;
}

export const Todos = ({ listOfTodos, toggle }: ITodosProps) => {
  const handleToggle = (id: number) => {
    console.log('Handle toggle in Todos, id:', id);
    toggle(id);
  };

  const html = listOfTodos.map((oneTodo) => <TodoView todo={oneTodo} key={oneTodo.id} toggle={handleToggle}></TodoView>);

  return <div>{html}</div>;
};
