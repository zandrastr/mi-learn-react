import { ChangeEvent } from 'react';

export const HandleInput = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Du ändrade något i textrutan', e.target.value);
        e.target.value;
    };

    return (
        <>
            <input type='text' onChange={handleChange} />
        </>
    );
};
