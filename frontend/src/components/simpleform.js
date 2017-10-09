import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <div>
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        placeholder="title"
                    />
                </div>
            </div>
            <div>
                <label>body</label>
                <div>
                    <Field
                        name="body"
                        component="input"
                        type="text"
                        placeholder="body"
                    />
                </div>
            </div>
            <div>
                <label>Author</label>
                <div>
                    <Field
                        name="author"
                        component="input"
                        type="text"
                        placeholder="author"
                    />
                </div>
            </div>
            <div>
                <label>category</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="udacity">Udacity</option>
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                    </Field>
                </div>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleForm)