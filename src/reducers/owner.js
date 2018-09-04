import { createAction, handleActions } from 'redux-actions'
import { Record } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_STORELIST = 'owner/GET_STORELIST'
const ADD_STORE = 'owner/ADD_STORE'
const TOGGLE_MODAL = 'owner/TOGGLE_MODAL'
const GET_PARKLIST = 'owner/GET_PARKLIST'
// ACTION CREATORS
//export const getStoreList = createAction(GET_STORELIST, api.storeList)
//export const addStore = createAction(ADD_STORE, api.addStore)
export const addStore = createAction(ADD_STORE, value => value)
export const toggleModal = createAction(TOGGLE_MODAL)
export const getParkList = createAction(GET_PARKLIST, api.parkList)
// STATE INITIALIZE
const initialState = Record({
	storeList: [
		{
			key: '0',
			storeName: '잠실스타벅스',
			menus: [],
			ballpark: '잠실야구장',
			imgUri:
				'http://blogfiles.naver.net/20140205_176/gamnamuzip_13915710096842bPrP_JPEG/37.jpg',
		},
		{
			key: '1',
			storeName: '수원스타벅스',
			menus: [],
			ballpark: '수원 kt 위즈파크',
			imgUri:
				'http://blogfiles.naver.net/20140205_176/gamnamuzip_13915710096842bPrP_JPEG/37.jpg',
		},
	],
	modal: false,
	parkList: [],
})()

// REDUCER
export default handleActions(
	{
		...pender({
			type: GET_PARKLIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { parks } = data
				console.log(data)
				return state.set('parkList', parks)
			},
		}),
		[TOGGLE_MODAL]: (state, action) => {
			return state.set('modal', !state.modal)
		},
		[ADD_STORE]: (state, { payload: value }) => {
			let parkName
			state.parkList.forEach(ballpark => {
				if (ballpark._id == value.park) parkName = ballpark.name
			})
			let newStore = {
				key: state.parkList.length - 1,
				storeName: value.storeName,
				ballpark: parkName,
				imgUri:
					'http://blogfiles.naver.net/20140205_176/gamnamuzip_13915710096842bPrP_JPEG/37.jpg',
			}
			var newList = Object.assign([], state.storeList)
			newList.push(newStore)
			return state.set('storeList', newList)
		},
	},
	initialState
)
