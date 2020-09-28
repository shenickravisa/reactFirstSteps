const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    /**
     * estoy agregando un nuevo objeto al state copiando el anterior y insertandole uno nuevo
     * el signo ? significa si action tiene un valor esto por que al principio de que carga la app action es undefined
     */
    return [...state, action.payload];
  }
  return state;
};
let todos = todoReducer();

const newTodo = [
  {
    id: 2,
    todo: "Comprar leche",
    done: false,
  },
];

const addTodoAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);

/**
 * es considerado un reducer por que retorna algo nuevo
 * siempre se debe de regresar un state
 * no usar push si se trabaja con react
 * nunca se enviarian los objetos directos en un reducer
 * type es una accion que le indica al reducer que hacer y es una estandar
 * payload es un estandar para enviar el objeto
 */
