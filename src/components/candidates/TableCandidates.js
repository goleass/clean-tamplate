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
      site: 'todos',
      interesse: 'todos',
      pi: 'todos'
    }
  }

  handleChangeSite = e => {
    this.setState({ site:e.target.value })
  }
  handleChangeArea = e => {
    this.setState({ interesse:e.target.value })
  }
  handleChangePI = e => {
    this.setState({ pi:e.target.value })
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                
              <Row className="mt-2">
                <Col>
                  <FormSelect
                    className="mb-2 mr-1"
                    size="sm"
                    style={{ maxWidth: "130px" }}
                    onChange={e => this.handleChangeSite(e)}
                  >
                    <option value="todos">Todos sites</option>
                    <option value="Porto Alegre">Porto Alegre</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                  </FormSelect>
                  <FormSelect
                    className="mb-2 mr-1"
                    size="sm"
                    style={{ maxWidth: "130px" }}
                    onChange={e => this.handleChangeArea(e)}
                  >
                    <option value="todos">Todas Áreas</option>
                    <option value="Desenvovimeto">Desenvolvimento</option>
                    <option value="Recursos Humanos">Recursos Humanos</option>
                    <option value="Administração">Administração</option>
                  </FormSelect>
                  <FormSelect
                    className="mb-2 mr-1"
                    size="sm"
                    style={{ maxWidth: "130px" }}
                    onChange={(e) => this.handleChangePI(e)}
                  >
                    <option value="todos">PI - todos</option>
                    <option value="Aventureiro">Aventureiro</option>
                    <option value="Criativo">Criativo</option>
                    <option value="Sociável">Sociável</option>
                  </FormSelect>
                  <Button 
                    size="sm" 
                    theme="primary" 
                    className="mb-2 mr-1"
                    onClick={() => alert(`Dados do select: ${this.state.site} ${this.state.interesse} ${this.state.pi}`)}
                    ><i class="fas fa-search"></i>
                  </Button>
                </Col>
              </Row>

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