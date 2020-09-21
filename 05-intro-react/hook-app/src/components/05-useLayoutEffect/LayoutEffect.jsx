import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Container,
  Grid,
  //   CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useFetch from "../../hooks/useFetch";
import "./layout.scss";
import { useCounter } from "../../hooks/useCounter";
import { useRef } from "react";

export const LayoutEffect = () => {
  const [boxSize, setBoxSize] = useState({});
  const { state, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { quote } = !!data && data[0];
  useEffect(() => {
    console.log(data, "cargo");
  }, [data]);

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log(
      "se ejecuta cada vez que se carga o renderiza mi componente",
      setBoxSize(pTag.current.getBoundingClientRect())
    );
  }, [quote]);
  //utilizamos como dependencia el quote para que se ejecute cada vez que cambie
  //esto significa que si el quote cambia tambien lo hizo el contenedor que lo contiene

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Layout Effect</h1>
        </Grid>
      </Grid>
      <Divider />
      <div className="block-quote-container">
        <span ref={pTag}>{quote}</span>
      </div>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <Grid container spacing={3}>
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
    </Container>
  );
};

/**
 * useLayoutEffect  despues de que se renderice algo yo puedo sacar ediciones de como quedaron divs
 * o diferentes tamaños o ejecutar codigo despues de que se ejecuta algo}
 *
 * getBoundingClientRect() no retorna las dimeciones del atributo html
 */
