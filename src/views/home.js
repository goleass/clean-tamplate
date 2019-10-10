import React, { Component } from 'react'
import { Container, Alert } from 'shards-react'

import Store from '../flux/store'
import Dashboard from '../components/dashboard/Dashboard'
import { Row } from 'react-bootstrap'
import PageTitle from '../components/common/PageTitle'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showAlert: Store.getAlertShow()
    }
  }

  dismiss = () => {
    Store.showAlert()
  }

  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">

        <Alert dismissible={this.dismiss,console.log(this.showAlert)} open={this.state.showAlert}>
          You can easily dismiss me using the <strong>close</strong> button &rarr;
        </Alert>  
      
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Situação Geral" subtitle="Dashboard" className="text-sm-left" />
        </Row>
        <Row>
          <Dashboard />
        </Row>
      </Container>
    )
  }
}

export default Home