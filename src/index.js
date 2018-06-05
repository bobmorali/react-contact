import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import store from './store/store'

import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'))

registerServiceWorker()
