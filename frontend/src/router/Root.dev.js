import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { Switch,Route } from 'react-router-dom'
import App from '../components/App'
import Category from '../components/category'
import SinglePost from '../components/singlepost'
import Addpost from '../components/newpost/postform'
import  EditPost from '../components/newpost/editpostform'
import  EditComment from '../components/newcomment/editcommentform'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch >
      <Route exact path="/" component={App} />
      <Route    path="/createpost" component={Addpost} />
      <Route  path="/edit/:post_id" component={EditPost} />
      <Route  path="/comment/:comment_id" component={EditComment} />
      <Route  exact path="/:category" component={Category} />
      <Route  path="/:category/:post_id" component={SinglePost} />
      
  
    </Switch>
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root



