import { combineReducers } from 'redux'
import { penderReducer } from 'redux-pender'
import base from './base'

const rootReducer = combineReducers({
	base,
	pender: penderReducer,
})

export default rootReducer
