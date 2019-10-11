import React, { Component } from 'react'
import { Container, Row } from 'shards-react'

import PageTitle from '../components/common/PageTitle'

class CandidateInterview extends Component {
  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agendamento de Entrevistas" subtitle="Segunda Etapa" />
        </Row>
        <Row>
        </Row>
	    </Container>
    )
  }
}

export default CandidateInterview