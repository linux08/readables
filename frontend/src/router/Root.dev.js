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
      <Route path="/:category"
        component={App} />
      <Route path="/:category/:post_id"
        component={App} />
      <Route path="/create/post"
        component={App} />
      {/* <Route exact path ='/edit' component={App} /> */}

    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root



