import React from "react";
import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./effects.scss";


const FormWithCustomHook = () => {
  const [state, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = state;

  useEffect(() => {
    console.log("entro");
  }, []);
  useEffect(() => {
    console.log("cambio el name",name);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yhea");
  };

  return (
    <Container maxWidth="xl">
      <h1>FormWithCustomHook</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Divider />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
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
          <Grid item xs={12} md={12}>
            <TextField
              style={{ width: "100%" }}
              value={password}
              name="password"
              id="standard-basic"
              label="contraseña"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          style={{
            marginTop: "10px",
            width: "100%",
            backgroundColor: "#a289dc",
          }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Guardar
        </Button>
      </form>
    </Container>
  );
};

export default FormWithCustomHook;

/**
 * en resumen la implementacion de un custom hook nos ayuda a no repetir codigo que podria hacer justamente lo mismo
 */
