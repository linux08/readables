import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import Posts from './post'
import { fetchCategoryOfAPost, fetchCategory } from '../actions/categories.js'

class App extends Component {

  componentDidMount() {

    this.props.click()
    this.props.clickcategory()

  }
  render() {
    // this.props.click()
    // this.props.category()

    const post = this.props.posts.posts
    const category = this.props.posts.category

    // console.log(category)
    // console.log(post)
    // let post = this.props.category.posts

    // console.log(this.props.category.categories)
    // console.log(this.props.category.posts)
    let posts = [
      {
        "id": "8xf0y6ziyjabvozdd253nd",
        "timestamp": 1467166872634,
        "title": "Udacity is the best place to learn React",
        "body": "Everyone says so after all.",
        "author": "thingtwo",
        "category": "react",
        "voteScore": 6,
        "deleted": false
      },
      {
        "id": "6ni6ok3ym7mf1p33lnez",
        "timestamp": 1468479767190,
        "title": "Learn Redux in 10 minutes!",
        "body": "Just kidding. It takes more than 10 minutes to learn technology.",
        "author": "thingone",
        "category": "redux",
        "voteScore": -5,
        "deleted": false
      }
    ]

    return (
      <div >
      
          <Header />
          <Posts  {...this.props} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.categoryReducer };

}

function mapDispatchToProps(dispatch) {
  return {
    click: () => dispatch(fetchCategoryOfAPost()),
    clickcategory: () => dispatch(fetchCategory())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

