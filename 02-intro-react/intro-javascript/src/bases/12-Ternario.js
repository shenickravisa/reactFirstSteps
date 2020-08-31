/**
 * operador ternario forma resumida de hacer una desicion
 */

const activo = true
//let mensaje = ''
//forma tradicional
// if (activo) {
//     mensaje = 'activo'
// } else {
//     mensaje = 'Inactivo'
// }
// console.log(mensaje)

// const mensaje = (activo) ? 'Activo' : 'Inactivo'
// console.log(mensaje)

//operador ternario el && se ejecuta solo si es true y se detiene no hay paso de else 
const mensajeActivo = activo && 'Activo'
console.log(mensajeActivo)