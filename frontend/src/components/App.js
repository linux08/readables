import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import Posts from './post'
import Footer from './footer'
import { fetchCategory, fetchPostInCategory, upvote, downvote, sortByTime, sortByVote } from '../actions/categories.js'
import { fetchComment } from '../actions/comment.js'
import * as API from '../utils/API.js'
import _map from 'lodash.map'


class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchpost().then(() => _map(this.props.posts.posts, post => {
      this.props.fetchcomment(post.id)
    }))

    this.props.fetchcategory()
  }

  changeEvent(url) {
    console.log('hehe')
    //window.location.href = 'http://localhost:3000/' + url
  }

  upvote(id, option) {
    this.props.upvote(id, "upVote")
  }

  downvote(id, option) {
    this.props.upvote(id, "upVote")
  }

  sortVote(data) {
    console.log(data)
    console.log('sorting by date')
    //this.props.sortbydate(data)
    this.props.fetchcategory()
  }
  // sortbydate
  //sortbytime
  sortTime(data) {
    console.log(data)
    console.log('sorting by time')
    this.props.fetchcategory()
    // fetchcomment
  //  this.props.fetchcomment(data)
  }



  render() {


    return (
      <div >

        <Header />
        <Posts
          {...this.props}
          changeEvent={this.changeEvent}
          getCommentCount={this.getCommentCount}
          sortVote={this.sortVote}
          sortTime={this.sortTime}
        />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}



function mapStateToProps(state) {
  return { posts: state.categorys, comment: state.comments };

}

function mapDispatchToProps(dispatch) {
  return {
    fetchpost: () => dispatch(fetchPostInCategory()),
    fetchcategory: () => dispatch(fetchCategory()),
    fetchcomment: (id) => dispatch(fetchComment(id)),
    upvote: (id, option) => dispatch(upvote(id, option)),
    downvote: (id, option) => dispatch(downvote(id, option)),
    sortbydate: (data) => dispatch(sortByTime(data)),
    sortbyvote: (data) => dispatch(sortByVote(data))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

