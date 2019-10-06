import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

//import './style.css'

class CurriculumDetailsCandidate extends Component {

  render() {
    
    return (
      <Row>
        <h6>Nome: {}</h6>
        <h6>E-mail: {}</h6>
        <h6>Telefone: {}</h6>
        <h6>Cidade{}</h6>
        <h6>Área de interesse: {}</h6>
        <h6>Experiência na Área: {}</h6>
      </Row>
    )
  }
}

export default CurriculumDetailsCandidate