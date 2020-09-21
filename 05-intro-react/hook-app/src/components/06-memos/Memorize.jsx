import React from "react";
import { Container, Grid, Divider, Button } from "@material-ui/core";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";
import { useState } from "react";

function Memorize(props) {
  const { state, increment } = useCounter(5);
  const [show, setShow] = useState(true);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Memorize</h1>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <span>
            Counter: <Small value={state} />
          </span>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            style={{ backgroundColor: "#54c45b", width: "100%" }}
            variant="contained"
            color="primary"
            onClick={() => {
              increment();
            }}
          >
            Incrementar
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            style={{ backgroundColor: "#c454bd", width: "100%" }}
            variant="contained"
            color="primary"
            onClick={() => {
              setShow(!show);
            }}
          >
            Show / Hide {JSON.stringify(show)}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Memorize;

/**
 * REACT cuando nota un cambio en el state vuelve a dibujar el componente
 *
 */
