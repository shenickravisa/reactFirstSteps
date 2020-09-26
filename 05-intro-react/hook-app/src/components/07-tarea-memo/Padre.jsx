import React from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";
import { useCallback } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};

/**
 * en el componente hijo usamos memo para memorizar los cambios
 * en el componente padre usamos useCallback para evitar que se renderize los componentes hijos cada
 * que el setValor cambie
 */