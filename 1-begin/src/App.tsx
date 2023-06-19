import './App.css';
import { ConditionalRendering } from './components/ConditionalRendering';
import { HelloWorld } from './components/HelloWorld';
import { Interpolation } from './components/Interpolation';
import { Lists } from './components/Lists';
import { InterpolationObject } from './components/InterpolationObject';

function App() {
    return (
        <>
            <HelloWorld></HelloWorld>
            <p>React + TypeScript + Vite</p>
            <Interpolation></Interpolation>
            <ConditionalRendering></ConditionalRendering>
            <Lists></Lists>
            <InterpolationObject></InterpolationObject>
        </>
    );
}

export default App;
