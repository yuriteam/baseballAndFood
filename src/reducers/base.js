import { createAction, handleActions } from 'redux-actions'
import { Record } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_PARKLIST = 'base/GET_PARKLIST'
const GET_CATELIST = 'base/GET_CATELIST'

// ACTION CREATORS
export const getParkList = createAction(GET_PARKLIST, api.parkList)
export const getCateList = createAction(GET_CATELIST, api.cateList)

// STATE INITIALIZE
const initialState = Record({
	parkList: [],
	cateList: [],
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
		...pender({
			type: GET_CATELIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { cates } = data
				return state.set('cateList', cates)
			},
		}),
	},
	initialState
)
