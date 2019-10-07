import React, { Component } from 'react'
import { Container } from 'shards-react'
import { Row } from 'react-bootstrap'

import TableCandidates from '../components/candidates/TableCandidates'
import PageTitle from '../components/common/PageTitle'

class Candidates extends Component {
  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Candidatos" subtitle="Cúrriculos cadastrados" className="text-sm-left" />
        </Row>
        <Row>
        </Row>
        <TableCandidates />
	    </Container>
    )
  }
}

export default Candidates