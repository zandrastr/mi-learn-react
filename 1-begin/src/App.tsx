import './App.css';
import { ConditionalRendering } from './components/ConditionalRendering';
import { HelloWorld } from './components/HelloWorld';
import { Interpolation } from './components/Interpolation';
import { Lists } from './components/Lists';
import { InterpolationObject } from './components/InterpolationObject';
import { ConditionalRenderingObject } from './components/ConditionalRenderingObject';
import { ListsObject } from './components/ListsObject';

function App() {
    return (
        <>
            <HelloWorld></HelloWorld>
            <p>React + TypeScript + Vite</p>
            <Interpolation></Interpolation>
            <ConditionalRendering></ConditionalRendering>
            <Lists></Lists>
            <InterpolationObject></InterpolationObject>
            <ConditionalRenderingObject></ConditionalRenderingObject>
            <ListsObject></ListsObject>
        </>
    );
}

export default App;
