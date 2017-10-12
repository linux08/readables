import React from 'react'
import { Field, reduxForm } from 'redux-form'



const required = value => (value ? undefined : 'Required')
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

const PostForm = props => {
    console.log(props)
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div className="App">
            <div className="header-post">

                <form className="post-form" onSubmit={handleSubmit}>
                    <h5> ADD NEW POST </h5>
                    <div>

                        <div>
                            <Field
                                label="Title"
                                name="title"
                                component={renderField}
                                type="text"
                                placeholder="title"
                                validate={[required, minValue18]}
                                warn={alphaNumeric}

                            />
                        </div>
                    </div>
                    <div>

                        <div>
                            <Field
                                label="Author"
                                name="author"
                                component={renderField}
                                type="text"
                                placeholder="author"
                                validate={[required, minValue18]}
                            />
                        </div>
                    </div>
                    <div>

                        <div>
                            <Field
                                label="Body"
                                name="body"
                                placeholder="Body"
                                component="textarea"
                                type="textarea"
                                validate={[required, minValue18]}
                            />
                        </div>
                    </div>

                    <div>

                        <div>
                            <label> Category </label>
                            <Field name="category" component="select" validate={required}  >
                                <option />
                                <option value="udacity">Udacity</option>
                                <option value="react">React</option>
                                <option value="redux">Redux</option>
                            </Field>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                    </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
    //form: 'PostForm' // a unique identifier for this form
})(PostForm)




