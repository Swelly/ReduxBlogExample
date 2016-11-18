import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

const Greeting = () => {
	return <div>Hey There</div>;
};

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="post/new" component={PostNew} />
	</Route>
);