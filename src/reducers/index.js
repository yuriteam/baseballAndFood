import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import base from './base'
import store from './store'
import owner from './owner'

const rootReducer = combineReducers({
	base,
	store,
	owner,
	pender: penderReducer,
})

export default rootReducer
