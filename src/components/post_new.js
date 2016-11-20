import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

// Define stateless component to render input and errors
const renderInput = field =>   
  <div>
    <input {...field.input} type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>

class PostNew extends Component {
	render() {

		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit}>
				<h3 className="form-title">Create a Post</h3>

				<div className="form-group">
					<label htmlFor="title">Title</label>
					<Field
						name="title"
						component={renderInput}
						type="text"
						className="form-control"/>
				</div>

				<div className="form-group">
					<label htmlFor="categories">Categories</label>
					<Field
						name="categories"
						component={renderInput}
						type="text"
						className="form-control"/>
				</div>

				<div className="form-group">
					<label htmlFor="content">Content</label>
					<Field
						name="content"
						component="textarea"
						type="text"
						className="form-control"/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'PostNewForm'
})(PostNew);