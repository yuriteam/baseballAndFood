import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import penderMiddleware from 'redux-pender'
import rootReducer from './reducers'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	connectRouter(history)(rootReducer),
	composeEnhancer(applyMiddleware(routerMiddleware(history), penderMiddleware()))
)
const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Root history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	)
}

render()

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./Root', () => {
		render()
	})

	module.hot.accept('./reducers', () => {
		store.replaceReducer(connectRouter(history)(rootReducer))
	})
}

registerServiceWorker()
