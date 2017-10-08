import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import Comment from './comment'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { commentupvote, commentdownvote, deleteComment} from '../actions/comment.js'
import { fetchSinglePosts } from '../actions/post.js'
import { fetchComment } from '../actions/comment.js'


class SinglePost extends Component {

    componentDidMount() {
        const url = window.location.href
        const params = url.split('/')
        const id = params[4]
        this.props.loadPost(id)
        this.props.fetchcomment(id)


    }
    changeEvent(e, url) {
        e.preventDefault()
        window.location.href = 'http://localhost:3000/' + url + '/posts'

    }
    render() {
        console.log(this.props)
        const post = this.props.post
        const comment = this.props.comments

        return (
            <div className="App">
                <Header />
                <div className="single-post">
                    <div className="container big">

                        <div className="">
                            <h5> POST </h5>
                            <br />
                            <br />
                            {/* "display-3" */}
                            <div className="border-post">
                                <Link to={`${post && post.category}/${post && post.id}`}>  <h1 className="" >Title: {post && post.title}</h1> </Link>
                                <br />
                                <div className="shift-left">
                                    <p className=""> Body: {post && post.body}</p>
                                    <div className="shift-left">
                                        <p className=""> Category: {post && post.category} </p>
                                        <p className="">Vote:<button onClick={(e) => this.props.commentdownvote(post && post.id, "downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {post && post.voteScore}  <button onClick={(e) => this.props.commentupvote(post && post.id, "upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>

                                        <p className="author"> Author: {post && post.author} </p>
                                        <p className="time" > Time: {moment(post && post.timestamp).format("MM/DD/YYYY")} </p>
                                        <p className="time"> Comments:{comment && comment.length || []}  <i className="fa fa-comment" aria-hidden="true"></i></p>
                                    </div>
                                </div>
                                <br />
                                <div className="belowpost shift-left">
                                    <button>Edit: <i className="fa fa-pencil-square-o" aria-hidden="true"></i> </button>
                                    <button className="delete" onClick={(e) => this.props.deletepost(post && post.id)}>Delete: <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
                                </div>
                                <br />
                                <h3> Comment </h3>
                                <br />
                                <Comment {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {

    return {

        post: state.post[ownProps.match.params.post_id],
        comments: state.comments[ownProps.match.params.post_id]
    }
}


function mapDispatchToProps(dispatch) {
    return {
        loadPost: id => dispatch(fetchSinglePosts(id)),
        commentupvote: (id, option) => dispatch(commentupvote(id, option)),
        commentdownvote: (id, option) => dispatch(commentdownvote(id, option)),
        fetchcomment: (id) => dispatch(fetchComment(id))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);








