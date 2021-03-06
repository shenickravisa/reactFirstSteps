export const todoReducer = (state = [], action) => {
    
    switch (action?.type) {
        case 'add':
            return [...state, action.playload]

        case 'delete':
            return state.filter(todo => todo.id !== action.playload)
    
        default:
            return state;
    }

}

/**
 * el default se ejecuta cuando se inicializa el state
 * esta funcion se usara dentro useReducer como reducer
 * 
 * en este ejemplo lo que venga en action son los objetos u arreglos que tendran una modificacion a seguir
 * en este caso no es necesario usar break por que al momento que retorne el nuevo state este termina de ejecutarse
 * 
 * para la parte del delete significa que filtrara en un nuevo arreglo todos los elementos excepto el que sea diferente al id
 * que se desea remover
 */