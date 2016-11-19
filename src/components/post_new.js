import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostNew extends Component {
	render() {
		const { fields: {title, categories, content }, handleSubmit } = this.props;
		// const title = this.props.fields.title etc...
		console.log({title});

		return (
			<form onSubmit={handleSubmit}>
				<h3 className="form-title">Create a Post</h3>

				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text" className="form-control"/>
				</div>

				<div className="form-group">
					<label htmlFor="categories">Categories</label>
					<input type="text" className="form-control"/>
				</div>

				<div className="form-group">
					<label htmlFor="content">Content</label>
					<textarea className="form-control"/>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'PostNewForm',
	fields: ['title', 'categories', 'content']
})(PostNew);