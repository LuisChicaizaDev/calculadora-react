import './App.css';
import logoLuis from './img/logo-luis-developer.png';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';

// Componente Button con props.children
function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src= {logoLuis}
          className='logo-luis'
          alt = 'Logo Luis' />
      </div>

      <div className='contenedor-calculadora'>

        <Display />

        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ButtonClear>Clear</ButtonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
