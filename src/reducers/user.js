import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_MYORDERLIST = 'user/GET_MYORDERLIST'
const CHANGE_LOADING = 'user/CHANGE_LOADING'

// ACTION CREATORS
export const getMyOrderList = createAction(GET_MYORDERLIST, api.myOrderList)
export const changeLoading = createAction(CHANGE_LOADING)

// STATE INITIALIZE
const initialState = Record({
	loading: true,
	orderList: List(),
})()

// REDUCER
export default handleActions(
	{
		...pender({
			type: GET_MYORDERLIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { orders } = data
				return state.set('orderList', List(orders))
			},
		}),
		[CHANGE_LOADING]: (state, action) => state.set('loading', action.payload),
	},
	initialState
)
