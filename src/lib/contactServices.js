
export const getContacts = () => {
  return fetch('http://localhost:8080/contacts')
    .then(res => res.json())
}

export const destroyContact = (id) => {
  return fetch(`http://localhost:8080/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export const updateContact = (contact) => {
  return fetch(`http://localhost:8080/contacts/${contact.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(res => res.json())
}

export const createContact = (contact) => {
  return fetch('http://localhost:8080/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstname: contact.firstname, lastname: contact.lastname, email: contact.email, phone: contact.phone, tags: contact.tags})
  })
    .then(res => res.json())
}
