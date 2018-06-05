import { CONTACT_ADD, CONTACTS_LOAD, CONTACT_REPLACE, CONTACT_REMOVE } from './contact'

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({ type: MESSAGE_SHOW, payload: msg })

export default function(state='', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case CONTACT_ADD:
    case CONTACTS_LOAD:
    case CONTACT_REPLACE:
    case CONTACT_REMOVE:
      return ''
    default:
      return state
  }
}
