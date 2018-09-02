import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_PARKLIST = 'store/GET_PARKLIST'
const GET_STORELIST = 'store/GET_STORELIST'

// ACTION CREATORS
export const getParkList = createAction(GET_PARKLIST, api.parkList)
export const getStoreList = createAction(GET_STORELIST, api.storeList)

// STATE INITIALIZE
const initialState = Record({
	parkList: [],
	storeList: List(),
	storeDetail: Record({})(),
})()
const StoreRecord = Record({})

// REDUCER
export default handleActions(
	{
		...pender({
			type: GET_PARKLIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { parks } = data
				return state.set('parkList', parks)
			},
		}),
		...pender({
			type: GET_STORELIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { stores } = data
				console.log(stores)
				return state
				// return state.set('storeList', stores)
			},
		}),
	},
	initialState
)
