import React from 'react'
import { Field, reduxForm } from 'redux-form'


const required = value => value ? undefined : 'Required'
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(5)
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength2 = minLength(2)
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const CommentForm = props => {
    console.log(props)
    const { handleSubmit, onSubmit, pristine, reset, submitting } = props
    return (
        <div className="App">

            <form className="comment-form" onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                    
                    <Field
                        label="Author"
                        name="author"
                        component={renderField}
                        type="text"
                        placeholder="Author"
                        validate={[required, minValue18]}
                        warn={alphaNumeric}

                    />
                </div>
                <div>
                    <Field
                        label="body"
                        name="body"
                        component={renderField}
                        type="text"
                        placeholder="comment"
                        validate={[required, minValue18]}
                        warn={alphaNumeric}

                    />
                </div>

                <button type="submit" disabled={pristine || submitting}  > ADD </button>
            </form>



        </div >
    )
}

export default reduxForm({
    form: 'commentForm' // a unique identifier for this form
})(CommentForm)


{/* 

import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import '../form.css'
// import { addComment, editComment, toggleCommentEdit } from '../actions';
// import uuid from 'uuid';

// class CommentForm extends Component { */}
//   renderTextField(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? 'has-danger' : ''}`;

//     return (
//       <div className={className}>
//         <input className='form-control' type='text' placeholder={field.placeholder}{...field.input} />
//         <label for="input" className="input-label">{field.label}</label>
//         <i class="bar"></i>
        
//         <div className="error-text">
//           {touched ? error : ''}
//         </div>
//       </div>
//     );
//   }

//   renderMarkdownField(field) {
//     const { meta: { touched, error } } = field;
//     const className = `form-group ${touched && error ? 'has-danger' : ''}`;

//     return (
//       <div className={className}>
//         <textarea placeholder={field.placeholder} {...field.input} />
//         <label for="textarea" className="input-label">{field.label}</label>
//         <i class="bar"></i>
        
//         <div className="error-text">
//           {touched ? error : ''}
//         </div>
//       </div>
//     );
//   }

//   submitForm(values) {
//     if (this.props.initialValues) {
//       values.id = this.props.initialValues.id;
//       this.props.editComment(values);
//     } else {
//       values.id = uuid.v4();
//       values.parentId = this.props.parentId;
//       values.timestamp = Date.now();
//       this.props.addComment(values);
//       this.props.reset();
//     }

//     this.props.toggleCommentEdit('');
//   }

//   render() {
//     const { handleSubmit, submitting, heading } = this.props;

//     return (
//       <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
//         <div className="comment-form">
//           <h3>{heading}</h3>
//           <div>
//             <Field name='author' placeholder='Author' className="form-field" component={this.renderTextField} label='Author: ' />
//           </div>
//           <div>
//             <Field name='body' placeholder='Comment Text' className="form-field" component={this.renderMarkdownField} label='Comment: ' />
//           </div>
//           <div className="button-container">
//           <button
//             type='submit'
//             className="button button--upVote">
//             <span>Submit</span>
//           </button>
//           <button
//             type='button'
//             disabled={submitting}
//             className="button button--delete"
//             onClick={() => this.props.toggleCommentEdit('')}>
//             <span>Cancel</span>
//           </button>
//           </div>
          
//         </div>
//       </form>
//     )
//   }
// }

// function validate(values) {
//   const errors = {};

//   if (!values.author) {
//     errors.author = 'Enter an author';
//   }

//   if (!values.body) {
//     errors.body = 'Your comment needs a body';
//   }

//   return errors;
// }

// function mapStateToProps(state, ownProps) {
//   return {
//     initialValues: ownProps.comment
//   }
// }

// CommentForm = reduxForm({
//   validate,
//   form: 'CommentForm',
//   enableReinitialize: true
// })(CommentForm);

// CommentForm = connect(mapStateToProps, { addComment, editComment, toggleCommentEdit })(CommentForm);

// export default CommentForm;