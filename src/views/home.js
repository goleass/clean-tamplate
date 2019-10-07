import React, { Component } from 'react'
import { Container } from 'shards-react'
import Dashboard from '../components/dashboard/Dashboard'
import { Row } from 'react-bootstrap'
import PageTitle from '../components/common/PageTitle'

class Home extends Component {

  	render() {
	    return(
	    	<Container fluid className="main-content-container px-4 pb-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Situação Geral" subtitle="Dashboard" className="text-sm-left" />
          </Row>
          <Dashboard />
	      </Container>
	    )
	 }
}

export default Home