import { ChangeEvent, FormEvent, useState } from 'react';
import { IceCream } from '../models/iceCream';

interface IIceCreamFormProps {
  handleSave: (iceCream: IceCream) => void;
}

export const IceCreamForm = ({ handleSave }: IIceCreamFormProps) => {
  const [iceCream, setIceCream] = useState<IceCream>({
    name: '',
    price: 0,
    flavour: '',
    cone: false,
    howToDo: {
      step1: '',
      step2: '',
      step3: '',
    },
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

  const handleToDoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setIceCream({ ...iceCream, howToDo: { ...iceCream.howToDo, [name]: e.target.value } });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(iceCream);
    handleSave(iceCream);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={iceCream.name} onChange={handleChange} name='name' />
      <input type='number' value={iceCream.price} onChange={handleChange} name='price' />
      <input type='text' value={iceCream.flavour} onChange={handleChange} name='flavour' />
      <input type='checkbox' checked={iceCream.cone} onChange={handleChange} name='cone' />
      <hr />
      <input type='text' value={iceCream.howToDo.step1} onChange={handleToDoChange} name='step1' />
      <input type='text' value={iceCream.howToDo.step2} onChange={handleToDoChange} name='step2' />
      <input type='text' value={iceCream.howToDo.step3} onChange={handleToDoChange} name='step3' />

      <button>Save</button>

      {/* <p>{JSON.stringify(iceCream)}</p> */}
    </form>
  );
};
