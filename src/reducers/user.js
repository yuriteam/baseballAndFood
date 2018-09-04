import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_MYORDERLIST = 'user/GET_MYORDERLIST'

// ACTION CREATORS
export const getMyOrderList = createAction(GET_MYORDERLIST, api.myOrderList)

// STATE INITIALIZE
const initialState = Record({
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
	},
	initialState
)
