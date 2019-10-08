import React, { Component, Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button, FormSelect } from 'shards-react'

import ModalCandidate from '../Modals/ModalCandidate'

const staticData = [
  {
    cpf: '04775861042',
    rg: '6126140232',
    reservista: '571440684625662',
    nome: 'Leonardo Gomes Assunção',
    cidade: 'Canoas',
    nascimento: '20/10/1999',
    interesse: 'Desenvolvimento',
    sexo: 'masculino'
  },
  {
    cpf: '04775861043',
    nome: 'Nicoli Gomes Assunção',
    rg: '6126140232',
    cidade: 'Esteio',
    nascimento: '20/10/1999',
    interesse: 'Desenvolvimento',
    sexo: 'feminino'
  },
  {
    cpf: '04775961042',
    rg: '6126140232',
    reservista: '571440684625662',
    nome: 'Marco Antônio Assunção',
    cidade: 'Porto Alegre',
    nascimento: '20/10/1999',
    interesse: 'Desenvolvimento',
    sexo: 'masculino'
  }
]

class TableCandidates extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modalShow: false,
      infoModal: {
        cpf: '',
        nome: '',
        cidade: '',
        idade: '',
        interesse: ''
      },
      selectInfo: {
        site: '' || 'todos',
        interesse: '' || 'todos'
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                
              <Col>
                <FormSelect
                  size="sm"
                  style={{ maxWidth: "130px" }}
                  onChange={(e) => {this.setState({site:e.target.value})}}
                >
                  <option value="todos">Todos sites</option>
                  <option value="Desenvovimeto"></option>
                  <option value="Recursos Humanos"></option>
                  <option value="Administração"></option>
                  {console.log(this.state)}
                </FormSelect>
                <FormSelect
                  size="sm"
                  style={{ maxWidth: "130px" }}
                  onChange={(e) => {this.setState({interesse:e.target.value})}}
                >
                  <option value="todos">Todas as áreas</option>
                  <option value="Porto Alegre"></option>
                  <option value="Canoas"></option>
                  <option value="São Paulo"></option>
                </FormSelect>
                <FormSelect
                  size="sm"
                  style={{ maxWidth: "130px" }}
                  onChange={(e) => {this.setState({interesse:e.target.value})}}
                >
                  <option value="todos">Todas as áreas</option>
                  <option value="Porto Alegre"></option>
                  <option value="Canoas"></option>
                  <option value="São Paulo"></option>
                </FormSelect>
              </Col>

              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">#</th>
                      <th scope="col" className="border-0">CPF</th>
                      <th scope="col" className="border-0">Nome</th>
                      <th scope="col" className="border-0">Nascimento</th>
                      <th scope="col" className="border-0">Cidade</th>
                      <th scope="col" className="border-0">Interesse</th>
                      <th scope="col" className="border-0">Full</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staticData.map((cand, index) => (
                      <Fragment>
                        <tr>
                          <td>{index+1}</td>
                          <td>{cand.cpf}</td>
                          <td>{cand.nome}</td>
                          <td>{cand.nascimento}</td>
                          <td>{cand.cidade}</td>
                          <td>{cand.interesse}</td>
                          <td>
                            <Button outline size="sm" className="mb-0" onClick={() => this.setState({ modalShow: true, infoModal: cand })}>Info</Button>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalCandidate
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          data={this.state.infoModal}
        />
      </Fragment>
    )
  }
}

export default TableCandidates