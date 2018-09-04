import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import base from './base'
import store from './store'
import user from './user'
import owner from './owner'

const rootReducer = combineReducers({
	base,
	store,
	user,
	owner,
	pender: penderReducer,
})

export default rootReducer
