const personajes = ['shenick', 'alan', 'jorge']

//entre llaves pedimos el elemento que necesitamos la coma inicial significa ignora el primero y asi sucesivamente
const [,p5] = personajes

console.log(p5)

const retornaElemento = () => {
    return ['abc', 123]
}

const [letras, numeros] = retornaElemento()

console.log(letras, numeros)

const useState = (valor) => {
    return [valor, ()=> {console.log('hola mundo')}]
}

const arr = useState('goku')
console.log(arr)

const [nombre, setNombre] = useState('goku')
console.log(nombre)
setNombre()
