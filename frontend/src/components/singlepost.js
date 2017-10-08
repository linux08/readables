import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import Header from './header'
import { Link } from 'react-router-dom'

import { fetchSinglePosts } from '../actions/post.js'

class SinglePost extends Component {

    componentDidMount() {
        const url = window.location.href
        const params = url.split('/')
        this.props.loadPost(params[4])


    }
    changeEvent(e, url) {
        e.preventDefault()
        window.location.href = 'http://localhost:3000/' + url + '/posts'
        //http://localhost:5001/react/posts
    }
    render() {
        console.log(this.props)
        const post = this.props.post
        console.log(post.id)
        return (
            <div >
                <Header />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.post };

}


function mapDispatchToProps(dispatch) {
    return {
        loadPost: id => dispatch(fetchSinglePosts(id)),
        // clickCategory: () => dispatch(fetchCategory())
        // ///  clickcategory: () => dispatch(fetchCategory())
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);

//  {/* <div className="">
//                     <div className="App">
//                         <div className="positon-header">
//                             <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button>
//                             {/* <div className="dropdown" > */}
//                             <h5 > </h5>
//                             {/* </div> */}
//                             <select className="btn btn-secondary dropdown-toggle header-space">
//                                 <option value="volvo">Sort by Timestamp</option>
//                                 <option value="saab">Sort by Date</option>
//                             </select>
//                         </div>
//                         <hr />
//                         <h4> Posts in <b>{category}</b> </h4>
//                     </div>
//                     <br />


//                     <div className="container small ">
//                         {posts && posts.map((p, index) => (
//                             <div key={index}>
//                                 {/* "display-3" */}
//                                 <Link to={'/'}>  <h1 className="" >Title: {p.title}</h1> </Link>
//                                 <br />
//                                 <div className="">
//                                     <p className=""> Body: {p.body}</p>
//                                     <div className="">
//                                         <p className=""> Category: {p.category} </p>
//                                         <p className="">Vote:<button> <i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button> <i className="fa fa-thumbs-up" aria-hidden="true"></i> </button> </p>

//                                         <p className="author"> Author: {p.author} </p>
//                                         <p className="time"> Time: {p.timestamp}</p>
//                                     </div>
//                                 </div>
//                                 <br />

//                                 {/* </div> */}
//                             </div>))}
//                     </div>
//                 </div> */}