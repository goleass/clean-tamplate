import React, { Component } from 'react'
import { Container } from 'shards-react'

import TableCandidates from '../components/candidates/TableCandidates'

class Candidates extends Component {
  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        <TableCandidates />
	    </Container>
    )
  }
}

export default Candidates