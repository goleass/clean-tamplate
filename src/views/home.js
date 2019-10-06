import React, { Component } from 'react'
import { Container } from 'shards-react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import MyVerticallyCenteredModal from '../components/Modals/AddModal'

class Home extends Component{
	constructor(props) {
		super(props)

		this.state = {modalShow:false}
	}

	const

  	render() {
	    return(
	    	<Container fluid className="main-content-container px-4 pb-4">
	      		<ButtonToolbar>
		    		<Button variant="primary" onClick={() => this.setState({modalShow:true})}>
		        		Launch vertically centered modal
		      		</Button>
		      		<MyVerticallyCenteredModal
		        		show={this.state.modalShow}
		        		onHide={() => this.setState({modalShow:false})}
		      		/>
		    	</ButtonToolbar>
	      </Container>
	    )
	 }
}

export default Home