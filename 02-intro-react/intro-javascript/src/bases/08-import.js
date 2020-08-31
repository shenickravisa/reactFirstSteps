//importar archivos
//import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'
//cuando hacemos las importaciones de un export default puede ser el nombre que sea
//cuando no es por default debemos usar entre llaves para desestructurar

//normal
// const getHeroeById = (id) => {
//    return heroes.find(heroe => {
//         if (heroe.id ===  id){
//             return heroe
//         }else {
//             return false
//         }
//     })
// }
//resumido
export const getHeroeById2 = (id) => heroes.find(heroe => heroe.id === id)


export const heroeFound = getHeroeById2(4)
//console.log(heroeFound)