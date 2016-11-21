import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// Define stateless component to render input and errors
const renderInput = field =>   
  <div className="form-group">
    <input className="form-control" {...field.input} type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>

 const renderTextArea = field =>
 	<div className="form-group">
 		<textarea className="form-control form-control-lg" {...field.input} type={field.type}/>
 		{field.meta.touched &&
	     field.meta.error &&
	    <span className="error">{field.meta.error}</span>}
  </div>

class PostNew extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	handleFormSubmit(formProps) {
		this.props.createPost(formProps)
			.then( () => {
				this.context.router.push('/');
		});
	}


	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3 className="form-title">Create a Post</h3>

				<div className="form-group">
					<label htmlFor="title">Title</label>
					<Field
						name="title"
						component={renderInput}
						type="text"/>
				</div>

				<div className="form-group">
					<label htmlFor="categories">Categories</label>
					<Field
						name="categories"
						component={renderInput}
						type="text"/>
				</div>

				<div className="form-group">
					<label htmlFor="content">Content</label>
					<Field
						name="content"
						component={renderTextArea}
						type="text"/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-warning">Cancel</Link>
			</form>
		)
	}
}

function validate(formProps){
  const errors = {};
 
  if(!formProps.title){
    errors.title = 'Please enter a username';
  }
  if(!formProps.categories){
    errors.categories = 'Enter some categories';
  }
  if(!formProps.content){
    errors.content = 'Enter more content';
  }
  return errors;
}

const form = reduxForm({
  form: 'PostsNewForm',
  validate
});

export default connect( null, { createPost })(form(PostNew));