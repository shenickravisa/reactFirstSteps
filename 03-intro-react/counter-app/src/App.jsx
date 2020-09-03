//en react hay dos formas de crear componentes
//componentes con base a clases y componentes con base a funciones (staless)
//importar react rapido imr ENTER
import React from "react"; //como usamos react para insertar JSX siempre tenemos que importarlo
import PropTypes from "prop-types"; // tipos de propiedades
import CounterApp from "./CounterApp.jsx"
//componente funcional
const App = ({ saludo2, subtitle }) => {
  //definir el uso obligatorio de props
  const saludo = "Hola shenick";
  // const obj = {
  //     name: 'shenick',
  //     apellido: 'Guzman campos',
  //     edad: 25
  // }
 const objSend = {
      value: 1
  }
  console.log(saludo2);
  return (
    <>
      {/* <pre>{JSON.stringify(obj, null, 3)}</pre> */}
      <h1>{saludo}</h1>
      <p>{subtitle}</p>
      <CounterApp value={objSend}></CounterApp>
    </>
  );
};

/**
 * se define el tipo de dato que seran las propiedades sirve para validar que las propiedades sean requeridas y igual al tipo de dato
 */
App.propTypes = {
  saludo2: PropTypes.string, //no es obligatorio
  saludo3: PropTypes.string.isRequired, //obligatorio
};
App.defaultProps = {
    subtitle: 'soy un subtitulo' //aqui definimos las propiedades por default
}

export default App;

//java script solo puede retornar un objeto a la ves

/**
 * fragmento high order component
 * en react todo los elementos html se deben de retornar en uno solo es decir <div></div>
 * con fragment no usas div en su lugar es inserccion de html en lugar de no poner FRAGMENT podemos solo poner <></>
 *
 * para imprimir varaibles en jsx usamos {} valores primitivos pero no bool igual objetos
 * imprimir objetos JSON.stringify(variable)
 *
 * comunicacion entre componentes PROPS del padre al hijo
 * en el padre
 *  <componente saludo="hola"></componente>
 * en el hijo
 * const App = (props) => {
 * console.log(props.saludo)
 * }
 */
