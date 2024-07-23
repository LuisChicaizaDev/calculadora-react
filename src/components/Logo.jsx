import React from "react";

/* Definimos nuestro componente funcional con 
* sintaxis de desestructuracion
*/
function Logo({src, alt}){
    return (
        <div className='logo-contenedor'>
            <img className= 'logo-luis'
              src= {src}
              alt= {alt}
            />
        </div>
    );
}

export default Logo;