import { createAction, handleActions } from 'redux-actions'
import { Record } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_PARKLIST = 'base/GET_PARKLIST'

// ACTION CREATORS
export const getParkList = createAction(GET_PARKLIST, api.parkList)

// STATE INITIALIZE
const initialState = Record({
	parkList: [],
})()

// REDUCER
export default handleActions(
	{
		...pender({
			type: GET_PARKLIST,
			onSuccess: (state, action) => {
				const { parks } = action.payload.data
				return state.set('parkList', parks)
			},
		}),
	},
	initialState
)
