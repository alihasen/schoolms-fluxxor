import React from 'react'
import { Route, Router, IndexRedirect } from 'react-router';
import { Application } from './Application';
import { Login } from './login';
import { Welcome } from './welcome'

module.exports = (
	<Router>
		<Route path="/" component={Application} >
			<IndexRedirect to="/login" />
			<Route path="login" component={Login} />
			<Route path="welcome" component={Welcome} />
		</Route>
	</Router>
);
