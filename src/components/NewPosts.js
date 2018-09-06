import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class NewPosts extends Component {
    renderField = field =>{
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    text="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
                
            </div>
        )
    }
    onSubmit = values => {
        this.props.createPost(values);
    }
    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name='title'
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name='categories'
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name='content'
                    component={this.renderField}
                />
                <button className='btn btn-primary' type='submit'>Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
            </form>
        );
    }
}

function validate (values) {
    const errors = {}

    if(!values.title) {
        errors.title="Please enter a title!";
    }
    if(!values.categories) {
        errors.categories="Please enter a title!";
    }
    if(!values.content) {
        errors.content="Please enter a title!";
    }

    //if errors is empty, the form is fine to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(NewPosts)
);
