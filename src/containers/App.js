import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap'

import ContactList from './../components/ContactList'
import Message from './../components/Message'
import Footer from './../components/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">Contact Manager</NavbarBrand>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Message />
            </Col>
            <Col>
              <Router>
                <div>
                  <Route render={() => (<ContactList/>)} />
                  <Footer />
                </div>
              </Router>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App
