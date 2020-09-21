import React from "react";
import { Container, Grid, Divider, Button } from "@material-ui/core";
import useCounter from "../../hooks/useCounter";
import { useState } from "react";
import { useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
const MemoHook = () => {
  const { state, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);
  //[state] nos indica que cuando cambie volvera a memorizar el ultimo valor obtenido

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Memorize</h1>
          <Divider></Divider>
          <p>{memoProcesoPesado}</p>
        </Grid>
        <Grid item xs={12} md={12}>
          <span>
            Counter: <small>{state}</small>
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
};

export default MemoHook;

/**
 * useMemo no ejecuta de nuevo si cambia un estado al menos que le indiques una condicion
 * recibe como callback una funcion y un input que son las dependencias parecido a useEffect
 * y retorna el resultado de la operacion del ultimo valor
 * cuando cambie un state x el valor computado en un useMemo no se renderiza al menos que este
 * sea el que cambie
 *
 * useEffect ejecuta todo de acuerdo al cambio de un estado como dependencia pero no se limita a ciertas funciones ya que renderiza todo
 * useMemo ejecuta las funciones que se le indiquen al cambio de un estado como dependencia
 * 
 * la idea de usar useMemo es utilizarlo como funcion externa mas no dentro del componente no tendia sentido usarlo en el componente
 */
