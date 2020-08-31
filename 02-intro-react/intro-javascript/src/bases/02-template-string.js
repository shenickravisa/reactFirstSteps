const nombre = 'shenick'
const apellido = 'guzman campos'
//forma tradicional
const nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

//forma template string
const nombreCompleto2 = `${nombre} ${apellido}`
console.log(nombreCompleto2)

const getSaludo = (saludo) =>{
   return saludo
}

console.log(`probando los template literal ${getSaludo('javascript es genial')}`)