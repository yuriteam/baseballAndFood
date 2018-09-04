import 'styles/bootstrap.scss'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
	HomePage,
	LoginPage,
	SignUpPage,
	SearchPage,
	DetailPage,
	OrderPage,
	MyOrderPage,
	OwnerPage,
	NotFoundPage,
} from 'containers/pages'
import PrivateRoute from 'utils/PrivateRoute'

const App = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/signup" component={SignUpPage} />
		<Route path="/search" component={SearchPage} />
		<Route exact path="/store/:storeId" component={DetailPage} />
		<PrivateRoute exact path="/store/:storeId/order" component={OrderPage} />
		<PrivateRoute path="/myorder" component={MyOrderPage} />
		<PrivateRoute path="/owner" component={OwnerPage} />
		<Route component={NotFoundPage} />
	</Switch>
)

export default App
