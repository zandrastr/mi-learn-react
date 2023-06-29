import { useState } from 'react';
import './App.css';
import { UserInput } from './components/UserInput';

function App() {
  const [name, setName] = useState('Sandra');

  const handleClick = () => {
    setName('Sofia');
    console.log('Inside handleClick fn:', name);
  };

  console.log('After handleClick fn:', name);

  return (
    <>
      <h3 onClick={handleClick}>{name}</h3>
      <UserInput></UserInput>
    </>
  );
}

export default App;
