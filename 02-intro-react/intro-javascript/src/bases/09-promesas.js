import { getHeroeById2 } from './bases/08-import'
//las promesas son asincronas y hasta que termina lo asincrono ejecuta todo la promesa se crean con 
//un argumento callback resolve and rejected
// const promesa = new Promise((resolve, reject) => {
/**
 * resolve si la promesa es exitosa reject si no lo fue
 */
// setTimeout(() => {
//resolve()
// const heroe = getHeroeById2(2)
//cuando usamos el resolve lo que pasemos como parametro se le transferira al then
// resolve(heroe)
//cuando falla
//         reject('no se pudo encontrar el heroe')
//     }, 2000)
// })
/**
 * las promesas tienen 3 resultados
 * then => que hace cuando fue exitioso
 * catch => que hace si hubo un error
 * finally => algo que se ejucta despues de then o catch
 */
// promesa.then((res) => {
//     console.log('then de la promesa', res)
// }).catch(err => {
//     console.warn(err)
// })

const getHeroeByIdAsync = (id) => {
    //por defecto el metodo retorna avoid para que retorne el resultado de la promesa ponemos return al inicio
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroeFound = getHeroeById2(id)
            heroeFound ? resolve(heroeFound) : reject('No se pudo encontrar el heroe')
        }, 2000)
    })
}

getHeroeByIdAsync(1).then(console.log).catch(console.warn)
/**
 * el catch retorna un resultado error lo podemos pasar como funcione dentro de si mismo
 */