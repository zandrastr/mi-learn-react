import { useState } from 'react';
import { Dog } from '../models/Dog';

export const ObjectInState = () => {
  const [dog, setDog] = useState<Dog>(new Dog('Bob', 4, 'orange', false));

  const handleClick = () => {
    setDog({ ...dog, isVaccinated: true });
  };

  return (
    <>
      <h1>Dogs</h1>
      <h2>Name: {dog.name}</h2>
      <input type='checkbox' checked={dog.isVaccinated} />
      {!dog.isVaccinated && <button onClick={handleClick}>Vaccinate</button>}
    </>
  );
};
