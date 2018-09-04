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
	OwnerOrderPage,
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
		<PrivateRoute exact path="/owner" component={OwnerPage} />
		<PrivateRoute path="/owner/:storeId/order" component={OwnerOrderPage} />
		<Route component={NotFoundPage} />
	</Switch>
)

export default App
