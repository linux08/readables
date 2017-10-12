import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { Switch,Route } from 'react-router-dom'
import App from '../components/App'
import Category from '../components/category'
import SinglePost from '../components/singlepost'
import Addpost from '../components/newpost/postform'
import  EditPost from '../components/newpost/editpostform'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch >
      <Route exact path="/" component={App} />
      <Route   exact path="/createpost" component={Addpost} />
      <Route   exact path="/:category" component={Category} />
      <Route exact path="/:category/:post_id" component={SinglePost} />
      <Route exact path="/edit/:post_id" component={EditPost} />
    
      {/* <Route exact path ='/edit' component={App} /> */}
    </Switch>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root



