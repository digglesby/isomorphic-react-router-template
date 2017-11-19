import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home.js';
import Test from './views/Test.js';

class Routes extends React.Component {
  constructor(){
    super();
  }

  render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}/>
        <Route path='/test' component={Test}/>
			</Switch>
		);
  }
}

export default Routes;
