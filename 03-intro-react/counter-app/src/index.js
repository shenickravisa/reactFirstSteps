import React from 'react'
//renderizar jsx en el html usamos React Dom necesitamos una referencia de en donde deseamos renderizar eso div root
import ReactDOM from 'react-dom'
import App  from './App'
import './index.scss'
const divRoot = document.querySelector('#root')

// const saludo = <h1>Hola mundo</h1>
//ReactDom crea un arbol de componentes tambien facilita la comunicacion mas facil
//para este ejercicio saludo no es un componente solo una etiqueta 

ReactDOM.render(<App />, divRoot)

