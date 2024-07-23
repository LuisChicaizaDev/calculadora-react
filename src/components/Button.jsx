import React from 'react'; // en versiones actuales se puede omitir
import '../stylesheets/Button.css';

/* props.children los componentes tendrán etiquetas de apertura y cierre
* Todo lo que esté dentro de la etiqueta sera un hijo del componente
*/

/* Con el onClick agregaremos a la pantalla el valor del botón
* la función anónima llamará a la función addInput
*/
function Button(props){

  // Función para saber si es un operador o no 
  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.' ) && (valor !== '=');
  }

  // Función para detectar y dar estilos al signo igual
  const isEqualSign = valor => {
    return valor === '=';
  }

    return(
        <div 
          className={`button-container ${isOperator(props.children) ? 'operator' : ''}${isEqualSign(props.children) ? 'result-button' : ''}`.trimEnd()}
          onClick = {() => props.controlClick(props.children)} >
          {props.children}
        </div>
    );
}

export default Button;