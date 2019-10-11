import React, { Component, Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button, FormSelect, FormInput, InputGroup} from 'shards-react'
import axios from 'axios'

import ModalCandidate from '../Modals/ModalCandidate'
import { Constants, Dispatcher } from '../../flux'

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
      data: {},
      infoModal: {
        cpf: '',
        nome: '',
        cidade: '',
        idade: '',
        interesse: ''
      },
      site: '',
      interesse: '',
      pi: '',
      cpf: ''
    }
  }

  showAlert=false
  textAlert= ''

  UNSAFE_componentWillMount() {
    // setta alguns dados retornados da api antes que o componente da tabela seja montado

    this.setState({ data:staticData })
    //axios.get(`http://nossaapi.api/`)
    //  .then(res => {
    //    const data = res.data
    //    this.setState({ data:data })
    //  })
  }

  handleChange = e => {
    const { name, value } = e.target
    
    switch (name) {
      case 'site':
        this.setState({ site:value })
        break;

      case 'pi':
        this.setState({ pi:value })
        break;

      case 'interesse':
        this.setState({ interesse:value })
        break;
      
      default:
        break;
    }
    
  }

  handleMsg = (err, type) => {
    Dispatcher.dispatch({
      actionType: Constants.SHOW_ALERT,
      payload: { err, type }
    })
  }

  handleInfoTableCpf = (cpf) => {
    // Connection Api
    axios.get(`http://nossaapi.api/?cpf=${cpf}`)
      .then(res => {
        const data = res.data
        this.setState({ data:data })
      })
      .catch(() => this.handleMsg("Erro no banco", "warning"))
  }

  handleInfoTable = () => {
    const { site, interesse, pi } = this.state
    // Connection Api
    axios.get(`http://nossaapi.api/?site=${site}&interesse=${interesse}&pi=${pi}`)
      .then(res => {
        const data = res.data
        this.setState({ data:data })
      })
      .catch(() => this.handleMsg("Erro no banco de dados", "warning"))
  }



  render() {
    const data = this.state.data
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
                    name="site"
                    style={{ maxWidth: "130px" }}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="todos">Todos sites</option>
                    <option value="poa">Porto Alegre</option>
                    <option value="sp">São Paulo</option>
                    <option value="sc">Santa Catarina</option>
                  </FormSelect>
                  <FormSelect
                    className="mb-2 mr-1"
                    size="sm"
                    name="interesse"
                    style={{ maxWidth: "130px" }}
                    onChange={e => this.handleChange(e)}
                  >
                    <option value="todos">Todas Áreas</option>
                    <option value="desenvolvimento">Desenvolvimento</option>
                    <option value="recursos_humanos">Recursos Humanos</option>
                    <option value="administracao">Administração</option>
                  </FormSelect>
                  <FormSelect
                    className="mb-2 mr-1"
                    size="sm"
                    name="pi"
                    style={{ maxWidth: "130px" }}
                    onChange={(e) => this.handleChange(e)}
                  >
                    <option value="todos">PI - todos</option>
                    <option value="aventureiro">Aventureiro</option>
                    <option value="criativo">Criativo</option>
                    <option value="socialvel">Sociável</option>
                  </FormSelect>
                  <Button 
                    size="sm" 
                    theme="primary" 
                    className="mb-2 mr-1"
                    onClick={() => this.handleInfoTable()}
                    ><i className="fas fa-search"></i>
                  </Button>
                  <InputGroup className="w-25 float-right">
                    <FormInput 
                      className="mb-2 mr-1" 
                      size="sm" 
                      name="cpf"
                      placeholder="CPF"
                      onChange={e => this.handleChange(e)} />
                    <Button 
                    size="sm" 
                    theme="primary" 
                    className="mb-2 mr-1"
                    onClick={() => this.handleInfoTableCpf()}
                    ><i className="fas fa-search"></i>
                  </Button>
                  </InputGroup>
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
                    {data.map((cand, index) => (
                      <Fragment key={index}>
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