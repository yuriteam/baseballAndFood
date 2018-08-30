import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import App from 'containers/App'

const Root = ({ history }) => (
	<ConnectedRouter history={history}>
		<App />
	</ConnectedRouter>
)

export default Root
