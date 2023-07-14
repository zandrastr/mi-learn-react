import { Todo } from '../models/Todo';
import './TodoView.css';

interface ITodoViewProps {
  todo: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}

export const TodoView = ({ todo, toggle, remove }: ITodoViewProps) => {
  const handleToggle = () => {
    console.log('Click in TodoView, id:', todo.id);
    toggle(todo.id);
  };

  const handleRemove = () => {
    remove(todo.id);
  };

  return (
    <div>
      <h4 className={todo.done ? 'done' : ''}>{todo.text}</h4>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
