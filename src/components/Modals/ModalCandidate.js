import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import CandidateDetails from '../candidates/CandidateDetails/CandidateDetails';

class ModalCandidate extends Component {

	constructor(props) {
		super(props);
		
		this.state = {}
	}

	render(){

		const data = this.props.data

		return(
			<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Informações do Candidato
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<CandidateDetails data={data}/>
					</Modal.Body>
					<Modal.Footer>
						<Button >Enviar para análise</Button>
						<Button variant="secondary" onClick={this.props.onHide}>Cancelar</Button>
					</Modal.Footer>
			</Modal>
    )
	}
}

export default ModalCandidate
