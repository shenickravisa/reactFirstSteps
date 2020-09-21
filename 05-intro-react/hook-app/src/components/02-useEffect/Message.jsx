import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";

const Message = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = state;
  useEffect(() => {
    const mouseMove = (e) => {
      setState({
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [state]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h3 style={{ textAlign: "center" }}>{x}</h3>
          <h3 style={{ textAlign: "center" }}>{y}</h3>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Message;

/**
 * en react el destroyed o beforeDestroy life cicle se puede considerar como un useEffect pero que retorne un callBack
 * const mouseMove = (e) => {
      console.log(":D");
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
    mouseMove hace referencia al eventListerner cuando se monta pero cuando se desmonta este se remueve
    siempre que se montan listerners hay que removerlos por que aunque estos se desmonten quedan abiertos
 *
 */
