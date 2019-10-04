import React, { Component } from 'react'
<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export default class AddModal extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render() {
    return(
      <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>

        <Modal.Footer>
          <Button variant="dange" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    )
  }
} 
=======
import { Modal, Button } from 'react-bootstrap'

const AddModal = props => {
		return(
		<Modal
		      {...props}
		      size="lg"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title-vcenter">
	          Modal heading
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	        <h4>Centered Modal</h4>
	        <p>
	          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
	          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
	          consectetur ac, vestibulum at eros.
	        </p>
	      </Modal.Body>
	      <Modal.Footer>
	        <Button onClick={props.onHide}>Close</Button>
	      </Modal.Footer>
	    </Modal>
    )
}


export default AddModal
>>>>>>> 15ee7d3eceeaba682fd7fb10046c6f3a2c4c8ced
