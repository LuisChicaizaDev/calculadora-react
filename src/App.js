import './App.css';
import logoLuis from './img/logo-luis-developer.png';
import Logo from './components/Logo';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');
  const [isResult, setIsResult] = useState(false);

  const addInput = value => {
    if (isResult) {
      if (isOperator(value)) {
        // Si es un operador, continúa la operación con el resultado anterior
        setInput(prevInput => prevInput + value);
      } else {
        // Si es un número o un punto, comienza una nueva operación
        setInput(value);
      }
      setIsResult(false);
    } else {
      setInput(prevInput => {
        if (isOperator(value) && isOperator(prevInput.slice(-1))) {
          return prevInput.slice(0, -1) + value; // Reemplaza el último operador introducido (5+*)
        }
        return prevInput + value;
      });
    }
  };

  const isOperator = char => {
    return ['+', '-', '*', '/'].includes(char);
  };

  const calculateResult = () => {
    if (input) {
      try {
        const result = evaluate(input);
        setInput(result.toString()); // Muestra el resultado y lo convierte en cadena
        setIsResult(true); // Marca que hemos mostrado un resultado
      } catch (error) {
        alert('Error en la operación');
        setInput('');
      }
    } else {
      alert('Introduce valores para realizar la operación');
    }
  };

  return (
    <div className="App">
      <Logo 
        src = {logoLuis}
        alt = 'Logo Luis Chicaiza'
      />

      <div className='contenedor-calculadora'>

        <Display input = {input} />

        <div className='row'>
          <Button controlClick = {addInput}>7</Button>
          <Button controlClick = {addInput}>8</Button>
          <Button controlClick = {addInput}>9</Button>
          <Button controlClick = {addInput}>/</Button>
        </div>
        <div className='row'>
          <Button controlClick = {addInput}>4</Button>
          <Button controlClick = {addInput}>5</Button>
          <Button controlClick = {addInput}>6</Button>
          <Button controlClick = {addInput}>*</Button>
        </div>
        <div className='row'>
          <Button controlClick = {addInput}>1</Button>
          <Button controlClick = {addInput}>2</Button>
          <Button controlClick = {addInput}>3</Button>
          <Button controlClick = {addInput}>-</Button>
        </div>
        <div className='row'>
          <Button controlClick = {addInput}>.</Button>
          <Button controlClick = {addInput}>0</Button>
          <Button controlClick = {calculateResult}>=</Button>
          <Button controlClick = {addInput}>+</Button>
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
