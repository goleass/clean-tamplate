import React, { Component, Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button } from 'shards-react'

import PageTitle from '../common/PageTitle'
import ModalCandidate from '../Modals/ModalCandidate'

const staticData = [
  {
    cpf: '04775861042',
    nome: 'Leonardo Gomes Assunção',
    cidade: 'Canoas',
    idade: '19',
    interesse: 'Desenvolvimento'
  },
  {
    cpf: '04775861043',
    nome: 'Nicoli Gomes Assunção',
    cidade: 'Esteio',
    idade: '15',
    interesse: 'Desenvolvimento'
  },
  {
    cpf: '04775961042',
    nome: 'Marco Antônio Assunção',
    cidade: 'Porto Alegre',
    idade: '45',
    interesse: 'Desenvolvimento'
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
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Candidatos" subtitle="Cúrriculos cadastrados" className="text-sm-left" />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Informações</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">#</th>
                      <th scope="col" className="border-0">CPF</th>
                      <th scope="col" className="border-0">Nome</th>
                      <th scope="col" className="border-0">Idade</th>
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
                          <td>{cand.idade}</td>
                          <td>{cand.cidade}</td>
                          <td>{cand.interesse}</td>
                          <td>
                            <Button pill outline size="sm-0" className="mb-0" onClick={() => this.setState({ modalShow: true, infoModal: cand })}>Info</Button>
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