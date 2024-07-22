import React from "react";
import '../stylesheets/Display.css';

/* Podemos definir los componentes tambien como funciones
* flecha en una variable que retornará la estructura del componente
*/

const Display = ({ input }) => (
  <div className="input">
    { input }
  </div>
);

export default Display;