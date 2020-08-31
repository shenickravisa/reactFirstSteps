//const variables que no cambian su valor
const inforPersonal = {
    nombre:'shenick',
    apellidoMaterno: 'guzman',
    apellidoPaterno: 'campos'
}
//si el valor cambia pero dentro de un bloque de codigo usamos let
let valorDado = 5
valorDado = 8
console.log(inforPersonal, valorDado)
// el ambito scope es que se afecta solo en su bloque de codigo
if (true) {
   let valorDado = 6
    console.log(valorDado)
}

console.log(valorDado)