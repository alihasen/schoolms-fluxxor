/*importing fluxxor*/
var Fluxxor = require('fluxxor');
import { FluxMixin, StoreWatchMixin, flux } from './flux'

/*importing react and react-router*/
import React from 'react'
import { render } from 'react-dom'
import { Router,  useRouterHistory  } from 'react-router'
import { createHashHistory } from 'history';

/*importing routes*/
import routes from './components/routes';

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });


/*passing flux as a props in react application*/
const createFluxComponent = (Component, props) => {
  return <Component {...props} flux={flux} />;
};

$(document).ready(function () {
	render(
	  <Router routes={routes} history={appHistory} createElement={createFluxComponent}/>,
	  document.getElementById('mypage')
	);
});
