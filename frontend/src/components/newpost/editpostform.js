import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchSinglePosts } from '../../actions/post.js'



const url = window.location.href
const id = url.split('/')[4]

//const data = loadpost(id)

//console.log(data)



// const data = {
//     this.props.loadPost(id)   

// }

let InitializeFromStateForm = props => {
    const { handleSubmit, load, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Author</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Body</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>




            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Undo Changes
        </button>
            </div>
        </form>
    )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
    form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
    state => ({
        initialValues: state.post[id]// pull initial values from account reducer
    })//,mapStateToProps,mapDispatchToProps

  //  state.post[id]
   
)(InitializeFromStateForm)



// function mapStateToProps(state, ownProps) {
    
//         return {
    
//             post: state.post[id]
//         }
//     }
    
    
//     function mapDispatchToProps(dispatch) {
//         return {
//             loadPost: id => dispatch(fetchSinglePosts(id))
    
//         }
//     }

export default InitializeFromStateForm