// const arreglo = new Array(100)
// arreglo.push(1)
const arreglo = [1, 2, 3, 4]
let arreglo2 = arreglo
arreglo2.push(5)
//igual que un objeto igualar un arreglo con otro no significa que se copie solo estamos asignado el mismo
//espacio de memoria por lo que cada cambio afecta a los dos
let arreglo3 = [...arreglo, 8]
arreglo3[0] = 9
// usando el operador spread estamos haciendo una copia de ese arreglo

const arreglo4 = arreglo3.map((element,index) => {
    return element * 2
})

console.log(arreglo, arreglo2, arreglo3, arreglo4)