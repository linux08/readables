import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import Posts from './post'
import Footer from './footer'
import { fetchCategory ,fetchPostInCategory } from '../actions/categories.js'
// import { fetchDetailsForSinglePost } from '../actions/comment.js'
//fetchCategoryOfAPost, 

class App extends Component {

  componentDidMount() {

    this.props.click()
    this.props.clickcategory()
  }

  changeEvent(url) {
    window.location.href = 'http://localhost:3000/' + url
  }

  render() {
    // this.props.click()
    // this.props.category()

    // const post = this.props.posts.posts
    // const category = this.props.posts.category



    return (
      <div >

        <Header />
        <Posts  {...this.props} changeEvent={this.changeEvent} />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.categoryReducer };

}

function mapDispatchToProps(dispatch) {
  return {
     click: () => dispatch(fetchPostInCategory()),
    clickcategory: () => dispatch(fetchCategory()),

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

