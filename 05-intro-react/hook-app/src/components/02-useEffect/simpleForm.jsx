import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Message from "./Message";
import "./effects.scss";


const SimpleForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = state;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  useEffect(() => {
    console.log("cambio el name", name);
  }, [name]);

  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Use Effect</h1>
          <Divider />
        </Grid>
      </Grid>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              value={name}
              name="name"
              id="standard-basic"
              label="Nombre"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              style={{ width: "100%" }}
              value={email}
              name="email"
              id="standard-basic"
              label="Correo"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
      {(name === '123') && <Message />}
    </Container>
  );
};

export default SimpleForm;

/**
 * useEffect nos permite ejecutar algun efecto secundario cuando algo suceda en nuestros componentes
 * en los formularios usar name es util para computar su valor y aisgnarlo directamente al state
 * [target.name]: target.value, donde name es el atributo en el input al cual hace referencia el state
 *
 * cada que sucede un cambio en el estado se vuelve a ejecutar pero con useEffect solo ocurre una sola vez o si le agregas dependencias ocurre cunado lo indiques
 *
 * importante si queremos observar el cambio de un state pero no todos los que tengamos podemos crear un nuevo useEffect pero como dependencia el state que queremos
 * observar
 */
