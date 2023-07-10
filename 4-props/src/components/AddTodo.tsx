import { ChangeEvent, useState } from 'react';

interface IAddTodoProps {
  addTodo: (text: string) => void;
}

export const AddTodo = ({ addTodo }: IAddTodoProps) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSave = () => {
    if (userInput !== '') {
      addTodo(userInput);
      setUserInput('');
    } else {
      alert('Write something');
    }
  };

  return (
    <>
      <input type='text' value={userInput} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </>
  );
};
