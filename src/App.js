import './App.css';
import logoLuis from './img/logo-luis-developer.png';

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
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>

    </div>
  );
}

export default App;
