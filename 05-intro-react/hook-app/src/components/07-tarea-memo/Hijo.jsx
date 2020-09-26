import React, { memo } from "react";
import { Button } from "@material-ui/core";

export const Hijo = memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <Button
      style={{ backgroundColor: "#0080ff", width: "10%", marginRight: "10px" }}
      variant="contained"
      color="primary"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </Button>
  );
});
