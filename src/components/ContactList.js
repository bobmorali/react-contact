import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContacts, deleteContact, saveContact } from './../reducers/contact'
import { Row, Col, Table, Button } from 'reactstrap'

import ContactForm from './ContactForm'

class ContactEdit extends Component {

  render() {
    const editing = this.props.editing
    const { id, firstname, lastname, phone, email } = this.props
    const tags = (this.props.tags) ? this.props.tags.join() : ''

    if(editing === this.props.id) {
      return(
        <ContactForm {...this.props} />
      )
    }
    return(
      <tr onClick={() => this.props.toggleEditing(id)}>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{tags}</td>
        <th scope="row"><Button color="danger" onClick={() => this.props.deleteContact(id)}>SUPP</Button></th>
      </tr>
    )
  }

}

class ContactList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: null,
      adding: false
    }
    this.toggleEditing = this.toggleEditing.bind(this)
    this.toggleAdding = this.toggleAdding.bind(this)
  }

  componentDidMount() {
    this.props.fetchContacts()
  }

  toggleEditing(itemId) {
    this.setState({ editing: itemId })
  }

  toggleAdding() {
    const { adding } = this.state
    this.setState({ adding: !adding })
  }

  render() {
    const { adding } = this.state
    return(
      <div>
        <Row>
          <Col className="text-right">
            <Button color="primary" onClick={() => this.toggleAdding()}>{(adding) ? 'Cancel' : 'Add Contact' }</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>phone</th>
                  <th>email</th>
                  <th>tags</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {(adding) && <ContactForm toggleAdding={this.toggleAdding}/>}
                {this.props.contacts.map(contact => (
                  <ContactEdit key={contact.id} toggleEditing={this.toggleEditing} editing={this.state.editing} deleteContact={this.props.deleteContact} {...contact} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(
  (state) => ({contacts: state.contact.contacts}),
  { fetchContacts, deleteContact, saveContact }
)(ContactList)
