import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { Route } from 'react-router-dom'
import App from '../components/App'
import Category from '../components/category'
import SinglePost from '../components/singlepost'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/:category"
        component={Category} />
      <Route exact path="/:category/:post_id"
        component={SinglePost} />
      <Route exact path="/create/post"
        component={Category} />
      {/* <Route exact path ='/edit' component={App} /> */}

    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root



