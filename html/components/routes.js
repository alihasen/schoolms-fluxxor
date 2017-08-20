import React from 'react'
import { Route, IndexRoute, Router } from 'react-router'
import {Application} from './Application.jsx'
import {DetailsPage} from './DetailsPage/index.jsx';

module.exports = (
  	<Router>
	  	<Route path="/" component={Application} /> 
	  	<Route path = "details" component = {DetailsPage} />
  	</Router>
);
