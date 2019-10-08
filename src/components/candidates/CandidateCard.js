import React, { Component, Fragment } from 'react'
import { 
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
 } from 'shards-react'

class CandidateCard extends Component {

  render(){
    return(  
      <Fragment>
        {this.props.data.map((c, index) => (
          <div  class="mb-4">
          <Col key={index}>
              <Card style={{ maxWidth: "400px" }} >
                <CardHeader>{c.nome}</CardHeader>
                <CardBody>
                
                </CardBody>
                <CardFooter>
                
                </CardFooter>
              </Card>
          </Col>
          </div>
        ))}
        
      </Fragment>
    )
  }
}

export default CandidateCard