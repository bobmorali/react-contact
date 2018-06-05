import reducer from './contact';

describe('Contact Reducer', () => {

  test('returns a state object', () => { // this test that the reducer return something - whatever
    const result = reducer(undefined, {type: 'ANYTHING'})
    expect(result).toBeDefined()
  })

  test('adds a contact', () => { // this test that reducer adds content if action type = 'CONTACT_ADD' and there's payload
    const startState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'}
      ]
    }
    const expectedState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'},
        {id: 4, firstname:'Alfredo', lastname: 'Santana', phone: '0323638471'}
      ]
    }
    const action = {type:'CONTACT_ADD', payload: {id: 4, firstname:'Alfredo', lastname: 'Santana', phone: '0323638471'}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('delete a contact', () => { // this test that reducer adds content if action type = 'CONTACT_ADD' and there's payload
    const startState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'},
        {id: 4, firstname:'Alfredo', lastname: 'Santana', phone: '0323638471'}
      ]
    }
    const expectedState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'}
      ]
    }
    const action = {type:'CONTACT_REMOVE', payload: 4}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('update a contact', () => { // this test that reducer adds content if action type = 'CONTACT_ADD' and there's payload
    const startState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'},
        {id: 4, firstname:'Alfredo', lastname: 'Santana', phone: '0323638471'}
      ]
    }
    const expectedState = {
      contacts: [
        {id: 1, firstname:'Tony', lastname: 'Serpico', phone: '0923638471'},
        {id: 2, firstname:'Boby', lastname: 'Belingo', phone: '0924638471'},
        {id: 3, firstname:'Miguel', lastname: 'Finoo', phone: '0923628471'},
        {id: 4, firstname:'Alfredo', lastname: 'Montana', phone: '0723638471'}
      ]
    }
    const action = {type:'CONTACT_REPLACE', payload: {id: 4, firstname:'Alfredo', lastname: 'Montana', phone: '0723638471'}}
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

})
