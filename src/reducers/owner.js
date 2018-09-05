import { createAction, handleActions } from 'redux-actions'
import { Record, List } from 'immutable'
import { pender } from 'redux-pender'
import * as api from 'utils/api'

// ACTIONS
const GET_STORELIST = 'owner/GET_STORELIST'
const TOGGLE_ADD_STORE_MODAL = 'owner/TOGGLE_ADD_STORE_MODAL'
const TOGGLE_POSTCODE_MODAL = 'owner/TOGGLE_POSTCODE_MODAL'
const TOGGLE_MENU_MGMT_MODAL = 'owner/TOGGLE_MENU_MGMT_MODAL'
const ADD_STORE = 'owner/ADD_STORE'
const ADD_MENU = 'owner/ADD_MENU'
const GET_OWNERORDERLIST = 'owner/GET_OWNERORDERLIST'
const FINISH_ORDER = 'owner/FINISH_ORDER'
const CHANGE_INPUT = 'owner/CHANGE_INPUT'
const CHANGE_FILE_INPUT = 'owner/CHANGE_FILE_INPUT'

const GET_MENULIST = 'owner/GET_MENULIST'
// ACTION CREATORS
export const getStoreList = createAction(GET_STORELIST, api.ownerStoreList)
export const toggleAddStoreModal = createAction(TOGGLE_ADD_STORE_MODAL)
export const togglePostCodeModal = createAction(TOGGLE_POSTCODE_MODAL)
export const toggleMenuMgmtModal = createAction(TOGGLE_MENU_MGMT_MODAL, key => key)
export const addStore = createAction(ADD_STORE, api.addStore)
export const addMenu = createAction(ADD_MENU, api.addMenu)
export const getOwnerOrderList = createAction(GET_OWNERORDERLIST, api.ownerOrderList)
export const finishOrder = createAction(FINISH_ORDER, api.finishOrder)
export const changeInput = createAction(CHANGE_INPUT)
export const changeFileInput = createAction(CHANGE_FILE_INPUT)

export const getMenuList = createAction(GET_MENULIST, api.getMenuList)
// STATE INITIALIZE
const initialState = Record({
	storeList: List(),
	addStoreModal: false,
	postCodeModal: Record({
		parentInput: null,
		input: '',
		modal: false,
	})(),
	menuMgmtModal: false,
	selectedStoreKey: '',
	orderList: List(),
	orderStore: null,
	imageFile: null,
	selectedStoreMenu: List(),
})()
const OrderRecord = Record({
	_id: '',
	user: '',
	store: null,
	menus: [],
	finish: false,
	ordered: '',
})

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
			state
				.set('addStoreModal', !state.addStoreModal)
				.setIn(['postCodeModal', 'parentInput'], null)
				.set('imageFile', null),
		[TOGGLE_POSTCODE_MODAL]: (state, action) => {
			if (state.postCodeModal.modal) {
				let newParentInput = state.postCodeModal.parentInput
				newParentInput.location = state.postCodeModal.input
				return state
					.setIn(['postCodeModal', 'modal'], !state.postCodeModal.modal)
					.setIn(['postCodeModal', 'input'], '')
					.setIn(['postCodeModal', 'parentInput'], newParentInput)
			}
			return state
				.setIn(['postCodeModal', 'modal'], !state.postCodeModal.modal)
				.setIn(['postCodeModal', 'parentInput'], action.payload)
		},
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
		...pender({
			type: GET_OWNERORDERLIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { store, orders } = data
				return state
					.set('orderList', List(orders.map(order => OrderRecord(order))))
					.set('orderStore', store)
			},
		}),
		...pender({
			type: FINISH_ORDER,
			onSuccess: (state, { payload: { data: data } }) => {
				const { orderId } = data
				const index = state.orderList.findIndex(item => item._id === orderId)
				return state.updateIn(['orderList', index, 'finish'], finish => !finish)
			},
		}),
		[CHANGE_INPUT]: (state, action) => state.setIn(['postCodeModal', 'input'], action.payload),
		[CHANGE_FILE_INPUT]: (state, action) => state.set('imageFile', action.payload),
		...pender({
			type: GET_MENULIST,
			onSuccess: (state, { payload: { data: data } }) => {
				const { menus } = data
				return state.set('selectedStoreMenu', List(menus))
			},
		}),
	},
	initialState
)
