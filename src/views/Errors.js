import React from "react";
import { Container, Button } from "shards-react";
import { Link } from 'react-router-dom'

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h3>Ops...</h3>
        <p>Você não tem permissão para acessar aqui.</p>
          <Link to="/">
            <Button  pill>
              &larr; Go home
            </Button>
          </Link>
      </div>
    </div>
  </Container>
);

export default Errors;
