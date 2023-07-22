import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import { IceCream } from './models/iceCream';

function App() {
  const [iceCream, setIceCream] = useState<IceCream>({
    name: '',
    price: 0,
    flavour: '',
    cone: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    //Handle different input types
    if (e.target.type === 'number') {
      setIceCream({ ...iceCream, [name]: +e.target.value });
    } else if (e.target.type === 'checkbox') {
      setIceCream({ ...iceCream, [name]: e.target.checked });
    } else {
      setIceCream({ ...iceCream, [name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(iceCream);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={iceCream.name} onChange={handleChange} name='name' />
      <input type='number' value={iceCream.price} onChange={handleChange} name='price' />
      <input type='text' value={iceCream.flavour} onChange={handleChange} name='flavour' />
      <input type='checkbox' checked={iceCream.cone} onChange={handleChange} name='cone' />

      <button>Save</button>

      {/* <p>{JSON.stringify(iceCream)}</p> */}
    </form>
  );
}

export default App;
