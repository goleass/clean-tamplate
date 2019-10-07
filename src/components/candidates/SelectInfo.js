import React, { Component } from "react";
import { Col, FormSelect } from "shards-react";

class SelectInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interesse: '' || 'todos',
      cidade: '' || 'todos'
    }
  }
  render() {
    return(
      <Col>
        <FormSelect
          size="sm"
          style={{ maxWidth: "130px" }}
          onChange={(e) => {this.setState({interesse:e.target.value})}}
        >
          <option value="todos">Todas as áreas</option>
          <option value="Desenvovimeto">Desenvovimeto</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Administração">Administração</option>
          {console.log(this.state)}
        </FormSelect>
        <FormSelect
          size="sm"
          style={{ maxWidth: "130px" }}
          onChange={(e) => {this.setState({cidade:e.target.value})}}
        >
          <option value="todos">Todas as cidades</option>
          <option value="Porto Alegre">Porto Alegre</option>
          <option value="Canoas">Canoas</option>
          <option value="São Paulo">São Paulo</option>
        </FormSelect>
      </Col>
    )
  }
};

export default SelectInfo;