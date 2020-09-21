import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });

  //descomponemos solo los que nos interesa
  const  {counter1, counter2} = state

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid className="container-text" item xs={12} md={12}>
          <h1>Counter {counter1}</h1>
          <h1>Counter {counter2}</h1>
          <hr />
          <Button
            onClick={() => {
              setState({
                ...state,  
                counter1: counter1 + 1,
              });
            }}
            variant="contained"
            color="primary"
          >
            +1
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CounterApp;

/**
 * cuando mandamos a llamar el setState estamos indicando que eso sera un nuevo estado por ende todas las anteriores se pierden
 * para evitar que se pierdan debemos hacer uso del operador sprean es decir cambiaremos el nuevo estado pero con la copia inicial
 */