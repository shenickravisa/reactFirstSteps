import React, { memo } from "react";
import { Button } from "@material-ui/core";
const ShowIncrement = memo(({ increment }) => {
  console.log("me volvi a generar");
  return (
    <Button
      style={{ backgroundColor: "#0080ff", width: "100%" }}
      variant="contained"
      color="primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </Button>
  );
});

export default ShowIncrement;

/**
 * recibimos una funcion como propiedad
 */
