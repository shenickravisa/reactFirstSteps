import React, { useRef } from "react";
import "../02-useEffect/effects.scss";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
export const FocusScreen = (props) => {
  //ref es usalmente usado en propiedades computadas y nos sirve para hacer referencias a atributos html
  const inputRef = useRef();
  const handleClick = () => {
    // document.querySelector("input").focus(); //focus resalta el elemento seleccionado
    // document.querySelector("input").select(); //select resalta el elemento seleccionado y selecciona su contenido
    //usando ref es como su hicieramos un querySelector al atributo
    inputRef.current.focus()
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Use Ref</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            ref={inputRef}
            style={{ width: "100%" }}
            name="name"
            label="Nombre"
            placeholder="Su nombre"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            style={{
              marginTop: "10px",
              width: "100%",
              backgroundColor: "#621fe0",
            }}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FocusScreen;
