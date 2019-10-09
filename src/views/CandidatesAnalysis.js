import React, { Component } from 'react'
import { Container, Row } from 'shards-react'

import PageTitle from '../components/common/PageTitle'

const data = [
  {
    nome: "Leonardo"
  },
  {
    nome: "Fernanda"
  },
  {
    nome: "Rafael"
  },
  {
    nome: "Bruna"
  },
  {
    nome: "Felipe"
  },
]

class CandidatesAnalysis extends Component {
  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Análise de Candidatos" subtitle="Primeira Etapa" />
        </Row>
        <Row>
        </Row>
      </Container>
    )
  }
}

export default CandidatesAnalysis