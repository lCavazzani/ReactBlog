import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPosts extends Component {
    renderTitleField = field =>{
        return(
            <div className="form-group">
                <label>Title</label>
                <input 
                    text="text"
                    className="form-control"
                    {...field.input}
                />
            </div>
        )
    }
    render(){
        return(
            <form>
                <Field
                    name='title'
                    component={this.renderTitleField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostNewForm'
})(NewPosts);
