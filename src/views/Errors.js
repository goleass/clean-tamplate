import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h3>Desculpe!</h3>
        <p>Você não tem permissão para acessar aqui.</p>
        <Button pill>&larr; Go Back</Button>
      </div>
    </div>
  </Container>
);

export default Errors;
