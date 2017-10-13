import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchSinglePosts } from './../../actions/post.js'
import * as API from '../../utils/API.js'
import Header from '../header'
import Footer from '../footer'




class EditPostForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            body: '',
            title: ''
        }
    }

    getPostData() {
        const { post_id } = this.props.match.params
        API.fetchDetailsForSinglePost(post_id).then((res) => {

            this.setState({
                body: res.data.body,
                title: res.data.title
            })
        }).then(() => {
            this.props.initialize({ title: this.state.title, body: this.state.body })
        })


    }

    componentDidMount() {
        this.getPostData()
        const { post_id } = this.props.match.params
        this.props.fetchSinglePosts(post_id)

    }

    submitPost(val) {

        const { post_id } = this.props.match.params

        API.updateSinglePost(post_id, val).then((res) => console.log(res))
        alert('Post edited succesfully')
        window.location.href = "/"

    }
    render() {

        const { handleSubmit, load, pristine, reset, submitting, post } = this.props

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

        return (
            <div>
                <Header />

                <form name="editForm" className="edit-form" onSubmit={handleSubmit(this.submitPost.bind(this))}>

                    <div>
                        <label>Title</label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Body</label>
                        <div>
                            <Field
                                name="body"
                                component="input"
                                type="text"
                                placeholder="Body"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" >
                            Submit
                    </button>
                        <button type="button" onClick={reset}>
                            Undo Changes
                    </button>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    return {

        post: state.post[ownProps.match.params.post_id]
    }
}



export default reduxForm({
    form: 'initializeFromState' // a unique identifier for this form
})(connect(mapStateToProps, { fetchSinglePosts })(EditPostForm));
