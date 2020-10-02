import React from "react";
import { Container, Grid, Divider, Button, TextField } from "@material-ui/core";
import { todoReducer } from "./todoReducer";
import "./styles.sass";
import { useReducer, useState, useEffect } from "react";
import useForm from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  //cuando un localStorage tiene vacios retorna null
};
/**
 * punto inicial de la app
 */
const TodoApp = () => {
  const [{ description }, handleInputChange, resetValue] = useForm({
    description: "",
  });
  const [hideForm, setHideForm] = useState(false);

  /**
   * inicializamos el reducer el cual tiene un estado inicial y la funcion reducer que esta en otro archivo
   */
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  /**
   * el reducer debe ser la funcion reducer que se exporta (opcional)
   * el initialState es el estado inicial
   * init inicializar el state cada que el componente sea renderizado
   * dispatch dispara la accion al reducer es decir este manda la info al reducer
   * el useReducer cuando detecta un cambio se encarga de volver a redendizar
   * init es una funcion computada que nos ayuda a que no se este ejecutando y ejecutando cada que el useReducer cambia
   */

  useEffect(() => {
    //si los efectos cambian se grabaran en el localStorage, localStorage solo graba strings
    //recordando que useEffect se ejecuta una sola vez al principio al menos que tenga una dependencia que lo haga ejecutarse
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = ({ id }) => {
    const action = {
      type: "delete",
      playload: id,
    };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    console.log("nueva tarea");
    setHideForm(!hideForm);
    /**
     * nuevo todo a almacenar
     */
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
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
    //resetea el form desde useFormHook
    resetValue();
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
                          onClick={() => {
                            handleDelete(todoItem);
                          }}
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

                  <TextField
                    style={{ width: "100%" }}
                    type="text"
                    name="description"
                    autoComplete="off"
                    label="Nombre"
                    value={description}
                    onChange={handleInputChange}
                    onKeyPress={(event) => {
                      if (!description) {
                        return;
                      }
                      if (event.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    disabled={!description}
                    onClick={() => {
                      handleSubmit();
                    }}
                    style={{
                      width: "100%",
                      margin: "10px 0 0 0",
                      boxShadow: "none",
                    }}
                    variant="outlined"
                    color="primary"
                  >
                    Agregar
                  </Button>
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

