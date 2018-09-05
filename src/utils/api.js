import axios from 'axios'
import queryString from 'query-string'
import auth from 'utils/auth'

export const login = ({ email, password }) => axios.post('/api/auth/login', { email, password })
export const register = ({ email, password, name, phoneNumber, isOwner }) =>
	axios.post('/api/auth/register', {
		email,
		password,
		name,
		phoneNumber,
		isOwner,
	})
export const myOrderList = () => axios.get('/api/auth/order', auth.authHeader())

export const parkList = () => axios.get('/api/store/parkList')
export const cateList = () => axios.get('/api/store/cateList')
export const storeList = values => axios.get('/api/store/search?' + queryString.stringify(values))
export const storeDetail = ({ storeId }) => axios.get('/api/store/' + storeId)
export const insertReview = ({ store, content, score }) =>
	axios.post('/api/store/review', { store, content, score }, auth.authHeader())
export const addOrder = ({ store, menus }) =>
	axios.post('/api/store/order', { store, menus }, auth.authHeader())

export const ownerStoreList = () => axios.get('/api/owner/storeList', auth.authHeader())
export const addStore = ({ name, park, category, location, phoneNumber, orderable }) =>
	axios.post(
		'/api/owner/addStore',
		{ name, park, category, location, phoneNumber, orderable },
		auth.authHeader()
	)
export const addMenu = ({ store, name, price }) =>
	axios.post('/api/owner/addMenu', { store, name, price }, auth.authHeader())
export const ownerOrderList = ({ storeId }) =>
	axios.get('/api/owner/' + storeId + '/orderList', auth.authHeader())
export const finishOrder = ({ orderId }) =>
	axios.post('/api/owner/finishOrder', { orderId }, auth.authHeader())
export const getMenuList = key => axios.get(`/api/store/${key}/menuList`, auth.authHeader())
