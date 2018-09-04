import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_STORELIST = 'owner/GET_STORELIST'
const TOGGLE_ADD_STORE_MODAL = 'owner/TOGGLE_ADD_STORE_MODAL'
const TOGGLE_MENU_MGMT_MODAL = 'owner/TOGGLE_MENU_MGMT_MODAL'
const ADD_STORE = 'owner/ADD_STORE'
const ADD_MENU = 'owner/ADD_MENU'

// ACTION CREATORS
export const getStoreList = createAction(GET_STORELIST, api.ownerStoreList)
export const toggleAddStoreModal = createAction(TOGGLE_ADD_STORE_MODAL)
export const toggleMenuMgmtModal = createAction(TOGGLE_MENU_MGMT_MODAL, key => key)
export const addStore = createAction(ADD_STORE, api.addStore)
export const addMenu = createAction(ADD_MENU, api.addMenu)
// STATE INITIALIZE
const initialState = Record({
	storeList: List(),
	addStoreModal: false,
	menuMgmtModal: false,
	selectedStoreKey: '',
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
		[TOGGLE_ADD_STORE_MODAL]: (state, action) =>
			state.set('addStoreModal', !state.addStoreModal),
		...pender({
			type: ADD_STORE,
			onSuccess: (state, { payload: { data: data } }) => {
				const { store } = data
				return state.update('storeList', storeList => storeList.push(store))
			},
		}),
		...pender({
			type: ADD_MENU,
			onSuccess: (state, { payload: { data: data } }) => {
				const { message } = data
				return state
			},
		}),
		[TOGGLE_MENU_MGMT_MODAL]: (state, { payload: key }) =>
			state
				.set('menuMgmtModal', !state.menuMgmtModal)
				.set('selectedStoreKey', state.selectedStoreKey == '' ? key : ''),
	},
	initialState
)
