import 'styles/bootstrap.scss'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, LoginPage, SignUpPage, SearchPage, NotFoundPage } from 'containers/pages'
import PrivateRoute from 'utils/PrivateRoute'

const App = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/signup" component={SignUpPage} />
		<Route path="/search" component={SearchPage} />
		<PrivateRoute path="/protected" component={() => <h3>protected test</h3>} />
		<Route component={NotFoundPage} />
	</Switch>
)

export default App
