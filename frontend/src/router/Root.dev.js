import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { Route } from 'react-router-dom'
import App from '../components/App'
//import {Route, IndexRoute} from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/submitform"
        component={App} />
      <Route path="/submitfor"
        component={App} />

    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root



