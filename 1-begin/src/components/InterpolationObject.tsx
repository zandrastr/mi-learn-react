interface IPerson {
    name: string;
    age: number;
    isStudent: boolean;
}

export const InterpolationObject = () => {
    const person: IPerson = { name: 'Sandra', age: 33, isStudent: true };

    return (
        <div className='person'>
            <h3>{person.name}</h3>
            <p>{person.age}</p>
            <input type='checkbox' checked={person.isStudent} />
        </div>
    );
};
