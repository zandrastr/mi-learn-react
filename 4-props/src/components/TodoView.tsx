import { Todo } from '../models/Todo';
import './TodoView.css';

interface ITodoViewProps {
  todo: Todo;
  toggle: (id: number) => void;
}

export const TodoView = ({ todo, toggle }: ITodoViewProps) => {
  const handleToggle = () => {
    console.log('Click in TodoView, id:', todo.id);
    toggle(todo.id);
  };

  return (
    <div>
      <h4 className={todo.done ? 'done' : ''}>{todo.text}</h4>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};
