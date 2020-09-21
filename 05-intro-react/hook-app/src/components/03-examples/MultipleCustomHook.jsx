import React, { useEffect } from "react";
import {
  Container,
  Grid,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import "./multiplecustomhook.scss";
import useFetch from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHook = () => {
  const { state, increment } = useCounter(1);
  //si la url cambia el useEffect renderiza de nuevo por que observa ese cambio

  //useFetch retorna un state
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  
  //!! significa que el null si es falso doble negado es true
  const { author, quote } = !!data && data[0];
  useEffect(() => {
    console.log(data, "cargo");
  }, [data]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Breaking Bad</h1>
        </Grid>
      </Grid>
      <Divider />
      {loading && (
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid className="progress-contaier" item xs={12} md={12}>
            <CircularProgress />
            <span className="animate__animated animate__flash animate__infinite">
              Cargando...
            </span>
          </Grid>
        </Grid>
      )}
      {loading === false && (
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            className="animate__animated animate__bounceInUp"
          >
            <h1>{author}</h1>
            <span>-{quote}</span>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              style={{ marginTop: "10px", backgroundColor: "#1F6032" }}
              variant="contained"
              color="primary"
              onClick={() => {
                increment();
              }}
            >
              Siguiente Quote
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
