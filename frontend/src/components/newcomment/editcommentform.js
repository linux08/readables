import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchSinglePosts  } from './../../actions/post.js'
import { fetchComment } from './../../actions/comment.js'
import * as API from '../../utils/API.js'
import Header from '../header'
import Footer from '../footer'




class EditCommentForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            body: '',
            error:'',
            parentid: ''

        }
    }

    getCommentData() {
        const { comment_id } = this.props.match.params
        API.fetchSingleComment(comment_id).then((res) => {
            console.log(res.data)
            this.setState({
                body: res.data.body,
                parentid: res.data.parentId

            })
        }).then(() => {
            this.props.initialize({ body: this.state.body })
        }).catch((err)=> {
            console.log(err)
            this.setState({
                error: err,

            })
        })


    }

    componentDidMount() {
        this.getCommentData()
    }

    submitComment(val) {

        const { comment_id } = this.props.match.params
        val.timestamp= Date.now()
    
        API.editComment(comment_id,val).then((res) => console.log(res))
        window.location.href ='/category/' +this.state.parentid
        //"/:category/:post_id"
        

    }
    render() {

        const { handleSubmit, load, pristine, reset, submitting, comment } = this.props

        if (this.state.error ) {
            return <div>NO COMMENT</div>
        }


        return (
            <div>
                <Header />
                
                <form name="editForm" className="edit-form" onSubmit={handleSubmit(this.submitComment.bind(this))}>
                <h2 className="edit-comment"> EDIT COMMENT </h2>

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
        comment: state.comments[ownProps.match.params.comment_id]
    }
}



export default reduxForm({
    form: 'initializeFromState' // a unique identifier for this form
})(connect(mapStateToProps, { fetchComment })(EditCommentForm))


