import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Alert } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";
import Store from  '../flux/store'


class DefaultLayout extends Component {
  _isMonted = false

  constructor(props) {
        super(props)
    
        this.state = {
          showAlert: Store.getAlertShow(),
          alertType: Store.getAlertType(),
          msg: Store.getMsg()
        }
    }

  componentDidMount() {
    this._isMonted = true
  }

  UNSAFE_componentWillMount() {
    Store.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    this._isMonted = false
  }

  dismiss = () => {
    Store.showAlert()
  }

  onChange = () => {
    this.setState({
      ...this.state,
      showAlert: Store.getAlertShow(),
      alertType: Store.getAlertType(),
      msg: Store.getMsg()
    })
  }

  render() {
    return(
      <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!this.props.noNavbar && <MainNavbar />}
        {/* {nessa posição, o alert irá ser renderizado na parte de baixo da pagina} */}
        <Alert theme={this.state.alertType} dismissible={this.dismiss} open={this.state.showAlert && this._isMonted}>
          {this.state.msg}
        </Alert>  
        {this.props.children}
        {!this.props.noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
    )
  }
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
