import React from "react";
import { Container, Grid, Divider, Button, TextField } from "@material-ui/core";
import { todoReducer } from "./todoReducer";
import "./styles.sass";
import { useReducer, useState, useEffect } from "react";
const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];
/**
 * punto inicial de la app
 */
const TodoApp = () => {
  const [hideForm, setHideForm] = useState(false);
  useEffect(() => {}, []);

  /**
   * inicializamos el reducer el cual tiene un estado inicial y la funcion reducer que esta en otro archivo
   */
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  /**
   * el reducer debe ser la funcion reducer que se exporta (opcional)
   * el initialState es el estado inicial
   * init inicializar el state cada que el componente sea renderizado
   * dispatch dispara la accion al reducer es decir este manda la info al reducer
   * el useReducer cuando detecta un cambio se encarga de volver a redendizar
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nueva tarea");
    setHideForm(!hideForm);
    /**
     * nuevo todo a almacenar
     */
    const newTodo = {
      id: new Date().getTime,
      desc: "nueva tarea",
      done: false,
    };
    /**
     * action
     */
    const action = {
      type: "add",
      playload: newTodo,
    };
    /**
     * con el dispatch le estamos enviando la info de action al todoReducer
     */
    dispatch(action);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>TodoApp ({todos.length})</h1>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {todos.map((todoItem, index) => (
                  <Grid item xs={12} md={12} key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <ul>
                          <li>
                            {index + 1}.- {todoItem.desc}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#ff3333",
                            boxShadow: "none",
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Borrar
                        </Button>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              {!hideForm ? (
                <div>
                  <Button
                    style={{
                      color: "#0000ff",
                      boxShadow: "none",
                      width: "100%",
                    }}
                   
                    color="#0000ff"
                    onClick={() => {
                      setHideForm(!hideForm);
                    }}
                  >
                    Mostrar Agregar
                  </Button>
                </div>
              ) : (
                <div>
                  <p>Agregar TODO</p>
                  <Divider></Divider>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      style={{ width: "100%" }}
                      type="text"
                      name="description"
                      autoComplete="off"
                      label="Nombre"
                    />
                    <Button
                      style={{
                        // backgroundColor: "#00ff00",
                        width: "100%",
                        margin: "10px 0 0 0",
                        boxShadow: "none",
                      }}
                      variant="outlined"
                      color="primary"
                    >
                      Agregar
                    </Button>
                  </form>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoApp;

/**
 *
 * manejo de cosas simples usar useState
 * manejo de apps grandes useReducer
 *
 */
