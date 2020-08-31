//desestructuracion

const persona = {
    nombre: 'shenick',
    apellido: 'guzman',
    edad: 25
}

//desestructuracion
const {nombre} = persona
const {apellido} = persona
const {edad} = persona

//desestructuracion y asignacion a una nueva variable
const {nombre:nombre2} = persona

console.log (nombre, apellido, edad)
console.log (nombre2)

//extraer las propiedades como parametro podemos asignar un valor por default si no viene

const getUserData = ({nombre, edad, apellido, rango = 'capitan'}) => {
    console.log(nombre,edad,apellido, rango)
}

getUserData(persona)

//extraer informacion de un objeto de un objeto

const direccion = {
    calle: 'jalisco',
    estado:'michoacan',
    latlng: {
        lat:0,
        lng:12
    }
}

const {calle, estado, latlng:{lat, lng}} = direccion

console.log(calle, estado, lat, lng)