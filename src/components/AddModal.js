import React, { Component } from 'react'
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