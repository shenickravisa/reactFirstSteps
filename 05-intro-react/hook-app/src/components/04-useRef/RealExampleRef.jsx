import React, { useState } from "react";
import "../02-useEffect/effects.scss";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { MultipleCustomHook } from "../03-examples/MultipleCustomHook.jsx";

export const RealExampleRef = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h1>Use Ref</h1>
        </Grid>
        <Grid item xs={12} md={12}>
          {show && <MultipleCustomHook />}
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            style={{ marginTop: "10px", backgroundColor: "#7c45e5" }}
            variant="contained"
            color="primary"
            onClick={() => {
              setShow(!show);
            }}
          >
            Show/Hide
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RealExampleRef;
