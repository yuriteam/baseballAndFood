import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import base from './base'
import store from './store'

const rootReducer = combineReducers({
	base,
	store,
	pender: penderReducer,
})

export default rootReducer
