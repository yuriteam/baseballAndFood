import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_STORELIST = 'store/GET_STORELIST'
const GET_STOREDETAIL = 'store/GET_STOREDETAIL'
const TOGGLE_REVIEW_MODAL = 'store/TOGGLE_REVIEW_MODAL'
const INSERT_REVIEW = 'store/INSERT_REVIEW'
const CHANGE_LOADING = 'store/CHANGE_LOADING'

// ACTION CREATORS
export const getStoreList = createAction(GET_STORELIST, api.storeList)
export const getStoreDetail = createAction(GET_STOREDETAIL, api.storeDetail)
export const toggleReviewModal = createAction(TOGGLE_REVIEW_MODAL)
export const insertReview = createAction(INSERT_REVIEW, api.insertReview)
export const changeLoading = createAction(CHANGE_LOADING)

// STATE INITIALIZE
const initialState = Record({
	storeList: List(),
	storeDetail: Record({
		store: null,
		menuList: List(),
		reviewList: List(),
		reviewModal: false,
	})(),
	loading: true,
})()

// REDUCER
export default handleActions(
	{
		...pender({
			type: GET_STORELIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { stores } = data
				return state.set('storeList', List(stores))
			},
		}),
		...pender({
			type: GET_STOREDETAIL,
			onSuccess: (state, { payload: { data: data } }) => {
				const { store, menus, reviews } = data
				return state
					.setIn(['storeDetail', 'store'], store)
					.setIn(['storeDetail', 'menuList'], List(menus))
					.setIn(['storeDetail', 'reviewList'], List(reviews))
			},
		}),
		[TOGGLE_REVIEW_MODAL]: (state, action) =>
			state.setIn(['storeDetail', 'reviewModal'], !state.storeDetail.reviewModal),
		...pender({
			type: INSERT_REVIEW,
			onSuccess: (state, { payload: { data: data } }) => {
				const { review } = data
				return state.updateIn(['storeDetail', 'reviewList'], reviewList =>
					reviewList.push(review)
				)
			},
		}),
		[CHANGE_LOADING]: (state, action) => state.set('loading', action.payload),
	},
	initialState
)
