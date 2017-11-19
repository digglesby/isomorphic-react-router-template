import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import Routes from './routes.js'

var app;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
	app = (
		<BrowserRouter>
		  <Routes />
		</BrowserRouter>
	);

	hydrate( app , document.getElementById('app'));
}else{

	app = (
		<StaticRouter context={window} location={window.location.pathname}>
	  	<Routes />
		</StaticRouter>
	);
}

export default app;
