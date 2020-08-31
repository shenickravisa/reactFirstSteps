
//funciones lambda
const saludar = (nombre) => {
    return `Hola ${nombre}`
}
//si solo retornas un valor sencillo no requiere llaves
const saludar2 = (nombre) => `Hola ${nombre}`

//si no recibe parametro y es un solo valor
const saludar3 = () => `Hola mundo`

//los parentesis en una funcion simple significa return

const saludar4 = () => ({
    uid: 'ABCD',
    username: 'paty'
})

const getActiveUser = (nombre) => ({uid: 'ABCD',username: nombre})

const usuarioActivo =  getActiveUser('Shenick')
console.log(usuarioActivo)
console.log(saludar('shenick'), saludar2('alondra'), saludar3(), saludar4())