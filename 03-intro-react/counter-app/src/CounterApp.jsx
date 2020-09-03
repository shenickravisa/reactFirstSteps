import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const CounterApp = ({ value = 1 }) => {
  let [counter, setCounter] = useState(value.value); //
  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => c + 1 )
  };
  const handleSubtract = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter((counter = value.value));
  };

  return (
    <div>
      <h1>componente hijo</h1>
      <h1>{counter}</h1>
      <Button onClick={handleAdd} variant="contained">
        +1
      </Button>
      <Button onClick={handleReset} variant="contained">
        reset
      </Button>
      <Button onClick={handleSubtract} variant="contained">
        -1
      </Button>
    </div>
  );
};
CounterApp.propTypes = {
  value: PropTypes.object.isRequired,
};
export default CounterApp;

//al igual que una funcion flecha como argumento retorna el e solamente
//onClick={handleAdd}

/**
 * hook es solo una funcion en este caso el useState recibe dos argumentos el valor y el valor a setear
 * const [nombre, setNombre] = useState
 * al usar el setCounter le decimos a react que el state cambio
 */
