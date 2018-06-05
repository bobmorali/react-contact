import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import contactReducer from './../reducers/contact'
import messageReducer from './../reducers/messages'

const reducer = combineReducers({
  contact: contactReducer,
  message: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
