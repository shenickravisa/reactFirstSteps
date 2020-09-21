import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid className="container-text" item xs={12} md={12}>
            <h1>Hola mundo</h1>
          </Grid>
        </Grid>
      </Container>
  );
};

export default App;
