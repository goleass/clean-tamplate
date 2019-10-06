import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class AddModal extends Component {

	constructor(props) {
		super(props);
		
		this.state = {}
	}

	render(){

		const { ...data } = this.props

		return(
		<Modal
		      {...this.props}
		      size="lg"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title-vcenter">
	          Informações do Candidato
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	        <h5>{console.log(data)}</h5>
	        <p>
	          
	        </p>
	      </Modal.Body>
	      <Modal.Footer>
	        <Button onClick={this.props.onHide}>Close</Button>
	      </Modal.Footer>
	    </Modal>
    )
	}
}


export default AddModal
