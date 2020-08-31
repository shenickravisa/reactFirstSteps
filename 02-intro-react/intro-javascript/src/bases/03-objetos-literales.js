const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: '45',
    direccion: {
        ciudad: 'new york',
        zip: 58210
    }
}
//cuando se crea un objeto o algo en js se crea un prototipe es decir una propiedad que tienen todos
// {persona:persona} significa que estamos creando un nuevo objeto apartir de uno existente
//cuando tienen los mismos nombres solo podemos poner {persona}
//cuando queremos imprimir un objeto en consola podemos usar table
//console.table({persona})

/**
 * aqui no estamos capiando el objeto si no mas bien estamos haciendo una
 * referencia al espacio de memoria por lo que modificar algo en una se afecta en la otra
 */

/**
 * para copiar objetos usamos spread assign o JSON.parse
 * let p1 = {
    ...person
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));
 */
const persona2 = { ...persona }
persona2.nombre = 'alondra'
console.log(persona, persona2)
