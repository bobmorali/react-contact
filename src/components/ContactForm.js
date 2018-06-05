import React, {Component} from 'react'
import { Form, FormGroup } from 'reactstrap'

import {connect} from 'react-redux'
import {saveContact} from './../reducers/contact'

class ContactFrom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id || '',
      firstname: this.props.firstname || '',
      lastname: this.props.lastname || '',
      phone: this.props.phone || '',
      email: this.props.email || '',
      tags: this.props.tags || ''
    }
  }

  displayTags(tagArray) {
    if(tagArray) {
      return tagArray.join()
    } else {
      return ''
    }
  }

  handleChange = (evt) => {
    const val = evt.target.value
    const name = evt.target.name
    if(name === 'tags') {
      this.setState({
        'tags': val.split(',')
      })
    } else {
      this.setState({
        [name]: val
      })
    }
  }

  handleKeyDown = (evt) => {
    if(evt.keyCode === 13) { // returns pressed
      this.handleSubmit(evt)
    }
    if(evt.keyCode === 27) { // escape pressed
      this.props.toggleEditing(null)
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const editing = this.props.editing
    this.props.saveContact(this.state)
    if(editing) {
      this.props.toggleEditing(null)
    } else {
      this.props.toggleAdding()
    }
  }

  render() {
    const {firstname, lastname, phone, email, tags} = this.state
    return (
      <tr>
        <td>
          <input type="text"
            onChange={this.handleChange}
            value={firstname}
            name="firstname"
            onKeyDown={this.handleKeyDown}/>
        </td>
        <td>
          <input type="text"
            onChange={this.handleChange}
            value={lastname}
            name="lastname"
            onKeyDown={this.handleKeyDown}/>
        </td>
        <td>
          <input type="text"
            onChange={this.handleChange}
            value={phone}
            name="phone"
            onKeyDown={this.handleKeyDown}/>
        </td>
        <td>
          <input type="text"
            onChange={this.handleChange}
            value={email}
            name="email"
            onKeyDown={this.handleKeyDown}/>
        </td>
        <td>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <input type="text"
                onChange={this.handleChange}
                value={this.displayTags(tags)}
                name="tags"
                onKeyDown={this.handleKeyDown}/>
            </FormGroup>
            <input type="submit"
              value="go"/>
          </Form>
        </td>
        <th scope="row"></th>
      </tr>
    )
  }
}

export default connect(null ,{saveContact})(ContactFrom)
