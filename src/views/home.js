import React, { Component } from 'react'
import { Container } from 'shards-react'
import Button from 'react-bootstrap/'

import ModalCandidate from '../components/Modals/ModalCandidate'

class Home extends Component{
	constructor(props) {
		super(props)

		this.state = {modalShow:true}
	}

  	render() {
	    return(
	    	<Container fluid className="main-content-container px-4 pb-4">
	      </Container>
	    )
	 }
}

export default Home