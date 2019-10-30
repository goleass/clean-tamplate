import React, { Component } from 'react'
import { Container, Row, Button } from 'shards-react'
import DataTimePicker from  'react-datetime-picker';
import { toastr } from 'react-redux-toastr'

import PageTitle from '../components/common/PageTitle'
import { day, month } from '../components/common/date/date'

class CandidateInterview extends Component {
  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })

  consisteDateTime = () => {
    const date = new Date()
    if(date < this.state.date){
      const d = this.state.date.getDay()
      const m = this.state.date.getMonth()
      const h = `${this.state.date.getHours()}:${this.state.date.getMinutes()}`
      toastr.info(`Entrevista agendada para dia ${d} (${day[d]}) de ${month[m]}, às ${h}`);
    }else {
      toastr.warning('A data para entrevista é inferior ou igual a de hoje');
      this.setState({ date })
    }
  }

  render() {
    return(
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agendamento de Entrevistas" subtitle="Segunda Etapa" />
        </Row>
        <Row>
          <DataTimePicker 
            value={this.state.date}
            onChange={this.onChange}
          />
          <Button 
            theme="primary" 
            onClick={() => this.consisteDateTime()}
            className="mr-2"
            ><i className="fas fa-check"></i>
          </Button>
        </Row>
	    </Container>
    )
  }
}

export default CandidateInterview