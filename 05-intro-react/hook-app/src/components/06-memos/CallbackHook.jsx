import React from "react";
import { Container, Grid, Divider } from "@material-ui/core";
import { useState } from "react";
import ShowIncrement from "./ShowIncrement";
import { useCallback } from "react";

const CallbackHook =  () => {
  const [state, setState] = useState(10);

  const increment = useCallback((num) => {
    setState(s => s + num);
    //esta version memorizada se manda como argumento de esta manera cuando cambie no afecta donde se mande a llamar la funcion en el hijo
    //de igual forma en el componente hijo habra que usar memo para que no cambie cada que el setState se ejecuta
    //podemos recibir argumentos desde el componente hijo  y usalos en nuestra funcion
  }, [setState]);

  /**
   * una forma de hacerlo tambien es aplicando un useEffect y como dependencia agregar el increment
   */
//   useEffect(()=> {
//     ???
//   }, [increment])

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>useCallback Hook: {state}</h1>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <ShowIncrement increment={increment} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallbackHook;

/*
 *callbackHook 1.- cuando mandamos llamar una funcion a un componente hijo <ShowIncrement increment={increment} /> 
 donde se espera como prop y se manda como funcion
 memo no funciona en estos casos -> ya que con funciones se vuelve a renderizar
 useCallback funciona de la siguiente manera tiene como argumento una logica y retorna una version memorizada de esa funcion que nos sirve para mandarla
 como argumento en otros lugares si la dependencia no ha cambiado
 */
