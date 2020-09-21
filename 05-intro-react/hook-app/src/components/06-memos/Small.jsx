import React, { memo } from "react";

const Small = memo(({ value }) => {
  console.log("me volvi a llamar :c");
  return <small>{value}</small>;
});

export default Small;

/**
 * memo es una funcion que regresa la forma memorizada del componente y solo se va a renderizar si las propiedades son cambiadas
 * es util cuando trabajas con componentes o custom hooks
 * 
 * memo va al inicio de la declaracion del componente funcional
 */