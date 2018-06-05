import { getContacts, createContact, updateContact, destroyContact } from './../lib/contactServices'
import { showMessage } from './messages'

const initState = {
  contacts: [],
  currentContact: ''
}

export const CONTACT_ADD = 'CONTACT_ADD'
export const CONTACTS_LOAD = 'CONTACTS_LOAD'
export const CONTACT_REPLACE = 'CONTACT_REPLACE'
export const CONTACT_REMOVE = 'CONTACT_REMOVE'

export const loadContacts = (contacts) => ({type: CONTACTS_LOAD, payload: contacts})
export const addContact = (contact) => ({type: CONTACT_ADD, payload: contact})
export const replaceContact = (contact) => ({type: CONTACT_REPLACE, payload: contact})
export const removeContact = (id) => ({type: CONTACT_REMOVE, payload: id})

export const fetchContacts = () => {
  return(dispatch) => {
    dispatch(showMessage('Loading Contacts'))
    getContacts()
      .then(contacts => dispatch(loadContacts(contacts)))
  }
}

export const saveContact = (contact) => {
  return(dispatch) => {
    dispatch(showMessage('Saving contact'))
    if(contact.id) {
      updateContact(contact)
        .then(res => dispatch(replaceContact(res)))
    } else {
      createContact(contact)
        .then(res => dispatch(addContact(res)))
    }
  }
}

export const deleteContact = (id) => {
  return(dispatch) => {
    dispatch(showMessage('Deleting contact'))
    destroyContact(id)
      .then(() => dispatch(removeContact(id)))
  }
}

export default(state = initState, action) => {
  switch (action.type) {
    case CONTACT_ADD:
      return {...state, contacts: state.contacts.concat(action.payload)}
    case CONTACTS_LOAD:
      return {...state, contacts: action.payload}
    case CONTACT_REPLACE:
      return {...state, contacts: state.contacts.map(t => t.id === action.payload.id ? action.payload : t)}
    case CONTACT_REMOVE:
      return {...state, contacts: state.contacts.filter(t => t.id !== action.payload)}
    default:
      return state;
  }
}
