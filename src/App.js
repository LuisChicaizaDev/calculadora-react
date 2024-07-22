import './App.css';
import logoLuis from './img/logo-luis-developer.png';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react'; //Utilizamos un Hook para el controlar el estado
import { evaluate } from 'mathjs'; //importamos una librería para calcular las operaciones

// Componente Button con props.children
function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Introduce valores para realizar la operación');
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src= {logoLuis}
          className='logo-luis'
          alt = 'Logo Luis' />
      </div>

      <div className='contenedor-calculadora'>

        <Display input = {input} />

        <div className='row'>
          <Button controlClick = {addInput}>1</Button>
          <Button controlClick = {addInput}>2</Button>
          <Button controlClick = {addInput}>3</Button>
          <Button controlClick = {addInput}>+</Button>
        </div>
        <div className='row'>
          <Button controlClick = {addInput}>4</Button>
          <Button controlClick = {addInput}>5</Button>
          <Button controlClick = {addInput}>6</Button>
          <Button controlClick = {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button controlClick = {addInput}>7</Button>
          <Button controlClick = {addInput}>8</Button>
          <Button controlClick = {addInput}>9</Button>
          <Button controlClick = {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button controlClick = {calculateResult}>=</Button>
          <Button controlClick = {addInput}>0</Button>
          <Button controlClick = {addInput}>.</Button>
          <Button controlClick = {addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear controlClear = {() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
