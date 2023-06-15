import './App.css';
import { ConditionalRendering } from './components/ConditionalRendering';
import { HelloWorld } from './components/HelloWorld';
import { Interpolation } from './components/Interpolation';

function App() {
    return (
        <>
            <HelloWorld></HelloWorld>
            <p>React + TypeScript + Vite</p>
            <Interpolation></Interpolation>
            <ConditionalRendering></ConditionalRendering>
        </>
    );
}

export default App;
