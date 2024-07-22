import React from 'react'; // en versiones actuales se puede omitir
import '../stylesheets/Button.css';

/* props.children los componentes tendrán etiquetas de apertura y cierre
* Todo lo que esté dentro de la etiqueta sera un hijo del componente
*/
function Button(props){

  // Función para saber si es un operador o no 
  const isOperator = valor => {
    return isNaN(valor) && (valor != '.' ) && (valor != '=');
  }

    return(
        <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
          {props.children}
        </div>
    );
}

export default Button;