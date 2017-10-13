import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import { connect } from 'react-redux'
import moment from 'moment'
import Header from './header'
import { Link } from 'react-router-dom'

import { fetchPostInCategory, fetchCategory, fetchCategoryOfPost } from '../actions/categories.js'

class Category extends Component {

    componentDidMount() {
        const url = window.location.href
        const params = url.split('/')
        this.props.loadCategory(params[3])
        this.props.clickCategory()

    }
    changeEvent(e, url) {
        e.preventDefault()
        window.location.href = 'http://localhost:3000/' + url + '/posts'

    }
    render() {
        console.log(this.props)
        const url = window.location.href
        const params = url.split('/')
        const category = params[3]
        const posts = this.props.postsincategory.postincategory


        let a = posts && posts.length
        if (a == 0) {
            return (
                <div >
                    <Header />
                    <div className="">
                        <div className="App">
                            <div className="positon-header">
                                <Link to={'/createpost'}> <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button></Link>
                            </div>
                            <hr />
                            <h4>  no Post in  this <b>{category}</b> </h4>
                        </div>
                        <br />
                    </div>
                </div>
            )
        }

        return (
            <div >
                <Header />
                <div className="">
                    <div className="App">
                        <div className="positon-header">
                            <Link to={'/createpost'}> <button type="button" className="btn btn-primary"><i className="fa fa-plus" aria-hidden="true"> ADD </i></button></Link>

                        </div>
                        <hr />
                        <h4> Posts in <b>{category}</b> </h4>
                    </div>
                    <br />


                    <div className="container small ">
                        {posts && posts.map((p, index) => (
                            <div key={index}>
                                {/* "display-3" */}
                                <h1 className="" >Title: {p.title}</h1>
                                <br />
                                <div className="">
                                    <p className=""> Body: {p.body}</p>
                                    <div className="">
                                        <p className=""> Category: {p.category} </p>
                                        <p className="">Vote:<button> <i className="fa fa-thumbs-down" aria-hidden="true"></i> </button> {p.voteScore}  <button> <i className="fa fa-thumbs-up" aria-hidden="true"></i> </button> </p>

                                        <p className="author"> Author: {p.author} </p>
                                        <p className="time"> Time: {moment(p.timestamp).format("MM/DD/YYYY")}</p>
                                    </div>
                                </div>
                                <br />

                            </div>))}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { postsincategory: state.categorys };

}


function mapDispatchToProps(dispatch) {
    return {
        loadCategory: category => dispatch(fetchCategoryOfPost(category)),
        clickCategory: () => dispatch(fetchCategory())
        ///  clickcategory: () => dispatch(fetchCategory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

