import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import Comment from './comment'
import moment from 'moment'
import uuid from 'uuid'
import { Link } from 'react-router-dom'
import { fetchComment, commentupvote, commentdownvote, deleteComment, addcomment} from '../actions/comment.js'
import { upvote, downvote, fetchSinglePosts, DeleteSinglePost } from '../actions/post.js'
import { } from '../actions/categories.js'


class SinglePost extends Component {

    componentDidMount() {
        const url = window.location.href
        const params = url.split('/')
        const id = params[4]//.replace(/\?/g,'')
        this.props.loadPost(id)
        this.props.fetchcomment(id)
    }

    handlePostSubmit(val) {
        const url = window.location.href
        const parentid = url.split('/')[4]
        
         val.parentId = parentid
         val.id = uuid() 
         val.timestamp = Date.now()
         console.log(this.props)
         this.props.addcomment(val,parentid)

    }

    changeEvent(e, url) {
        e.preventDefault()
        window.location.href = 'http://localhost:3000/' + url + '/posts'

    }

    deleteit(id) {
        this.props.deletepost(id)
        alert('post deleted')
        window.location.href = 'http://localhost:3000/'

    }
    render() {

        const { post } = this.props
        var b = post && Object.getOwnPropertyNames(post).length;
        if (!post) {
            return <div>NO POST</div>
        }

        if (b === 0) {
            // alert('post not available')
            window.location.href = 'http://localhost:3000/'
        }
        if (this.props && !post) {
            alert('no post')
        }

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
                              <h1 className="" >Title: {post && post.title}</h1> 
                                <br />
                                <div className="shift-lt">
                                    <p className=""> Body: {post && post.body}</p>
                                    <div className="shift-lt">
                                        <p className=""> Category: {post && post.category} </p>
                                        <p className="">Vote:<button onClick={(e) => this.props.downvote(post && post.id, "downVote")}><i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {post && post.voteScore}  <button onClick={(e) => this.props.upvote(post && post.id, "upVote")}> <i className="fa fa-thumbs-up" aria-hidden="true"></i></button> </p>

                                        <p className="author"> Author: {post && post.author} </p>
                                        <p className="time" > Time: {moment(post && post.timestamp).format("MM/DD/YYYY")} </p>
                                        <p className="time"> Comments:{comment && comment.length || []}  <i className="fa fa-comment" aria-hidden="true"></i></p>
                                    </div>
                                </div>
                                <br />
                                <div className="belowpost ">
                                    <button>Edit: <i className="fa fa-pencil-square-o" aria-hidden="true"></i> </button>
                                    <button className="delete" onClick={(e) => this.deleteit(post && post.id)}>Delete: <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
                                </div>
                                <br />
                                <h3> Comment </h3>
                                <br />
                                <Comment {...this.props} onSubmit={this.handlePostSubmit.bind(this)} />
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
        commentupvote: (id, parentid, option) => dispatch(commentupvote(id, parentid, option)),
        commentdownvote: (id, parentid, option) => dispatch(commentdownvote(id, parentid, option)),
        fetchcomment: (id) => dispatch(fetchComment(id)),
        deletepost: (id) => dispatch(DeleteSinglePost(id)),
        upvote: (id, option) => dispatch(upvote(id, option)),
        downvote: (id, option) => dispatch(downvote(id, option)),
        deletecomment: (id, parentid) => dispatch(deleteComment(id, parentid)),
        addcomment: (data,parentid) => dispatch(addcomment(data, parentid))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);









