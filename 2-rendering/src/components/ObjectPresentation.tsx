import { IBoat } from '../models/IBoat';

export const ObjectPresentation = () => {
    const boat: IBoat = {
        name: 'Albatross',
        engine: true,
        color: 'Vit',
        length: 36,
        sail: 'Spinnacker, Genua',
        type: 'Segelbåt',
    };

    return (
        <>
            <h3>{boat.name}</h3>
            Motor:
            <input type='checkbox' checked={boat.engine} />
            {boat.type === 'Segelbåt' ? <span>{boat.length} fot</span> : <h2>{boat.color}</h2>}
        </>
    );
};
