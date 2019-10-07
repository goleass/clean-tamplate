import React, { Component } from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'

class CurriculumDetailsCandidate extends Component {

  render() {

    const data = this.props.data
    
    return (
      <Row>
      <Col sm="4">
        <h5>Pessoais</h5>
        <ListGroup>
          <ListGroup.Item><small>Nome: </small>{data.nome}</ListGroup.Item>
          <ListGroup.Item><small>CPF: </small>{data.cpf}</ListGroup.Item>
          <ListGroup.Item><small>RG: </small>{data.rg}</ListGroup.Item>
          {data.sexo === "masculino"? <ListGroup.Item><small>Reservista: </small>{data.reservista}</ListGroup.Item> : " "}
          <ListGroup.Item><small>Data de nascimento: </small>{data.nascimento}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm="4">
        <h5>Endereço</h5>
        <ListGroup>
          <ListGroup.Item><small>País: </small>{data.pais}</ListGroup.Item>
          <ListGroup.Item><small>Estado: </small>{data.estado}</ListGroup.Item>
          <ListGroup.Item><small>Cidade: </small>{data.cidade}</ListGroup.Item>
          <ListGroup.Item><small>Rua: </small>{data.rua}</ListGroup.Item>
          <ListGroup.Item><small>Cep </small>{data.cep}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm="4">
        <h5>Profissionais</h5>
        <ListGroup>
          <ListGroup.Item><small>Experiência na área: </small>{data.exp_area}</ListGroup.Item>
          <ListGroup.Item><small>Último emprego: </small>{data.emp}</ListGroup.Item>
          <ListGroup.Item><small>Cursos: </small>{data.cursos}</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    )
  }
}

export default CurriculumDetailsCandidate