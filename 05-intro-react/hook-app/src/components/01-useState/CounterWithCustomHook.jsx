import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useCounter } from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  //importamos el customHook que retorna el valor de counter y tambien sus funciones de incremento y decremento pasamos como argumento un valor
  const { state, increment, decrement, reset } = useCounter();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid className="container-text" xs={12} md={12}>
          <h1>Counter with Hook: {state}</h1>
          <hr />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            onClick={() => {
              increment(2);
            }}
            style={{ margin: "10px" }}
            variant="outline"
            color="primary"
          >
            +1
          </Button>
          <Button
            onClick={ reset }
            style={{ margin: "10px" }}
            variant="outline"
            color="primary"
          >
            RESET
          </Button>
          <Button
            onClick={() => {
              decrement(2);
            }}
            style={{ margin: "10px" }}
            variant="outline"
            color="primary"
          >
            -1
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CounterWithCustomHook;
