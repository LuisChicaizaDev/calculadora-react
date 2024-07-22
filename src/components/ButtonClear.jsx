import React from "react";
import '../stylesheets/ButtonClear.css';

const ButtonClear = (props) => (
    <button className="button-clear">
      {props.children}
    </button>
);

export default ButtonClear;