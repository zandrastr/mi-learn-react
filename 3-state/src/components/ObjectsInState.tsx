import { ChangeEvent, useState } from 'react';
import { Dog } from '../models/Dog';

export const ObjectsInState = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [color, setColor] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAge = +e.target.value;
    setAge(newAge);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleClick = () => {
    setDogs([...dogs, new Dog(name, age, color, false)]);
  };

  const handleVaccination = (name: string) => {
    setDogs(
      dogs.map((dog) => {
        if (dog.name === name) {
          return { ...dog, isVaccinated: true };
        } else {
          return dog;
        }
      })
    );
  };

  const handleDelete = (name: string) => {
    setDogs(dogs.filter((dog) => dog.name !== name));
  };

  const html = dogs.map((dog) => (
    <div>
      <h3>{dog.name}</h3>
      <input type='checkbox' checked={dog.isVaccinated} />
      {!dog.isVaccinated && <button onClick={() => handleVaccination(dog.name)}>Vaccinate</button>}
      <button onClick={() => handleDelete(dog.name)}>Delete</button>
    </div>
  ));

  return (
    <>
      <h3>Dogs</h3>
      <div>
        <input placeholder='Name' value={name} onChange={handleNameChange} />
        <input placeholder='Age' value={age} onChange={handleAgeChange} />
        <input placeholder='Color' value={color} onChange={handleColorChange} />
        <button onClick={handleClick}>Save</button>
      </div>
      {html}
    </>
  );
};
