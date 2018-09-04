import axios from 'axios'
import queryString from 'query-string'
import auth from 'utils/auth'
axios.defaults.headers.common['Authorization'] = auth.authHeader()

export const login = ({ email, password }) => axios.post('/api/auth/login', { email, password })
export const register = ({ email, password, name, phoneNumber, isOwner }) =>
	axios.post('/api/auth/register', {
		email,
		password,
		name,
		phoneNumber,
		isOwner,
	})

export const parkList = () => axios.get('/api/store/parkList')
export const cateList = () => axios.get('/api/store/cateList')
export const storeList = values => axios.get('/api/store/search?' + queryString.stringify(values))
export const storeDetail = ({ storeId }) => axios.get('/api/store/' + storeId)
export const insertReview = ({ store, content, score }) =>
	axios.post('/api/store/review', { store, content, score })

export const ownerStoreList = () => axios.get('/api/owner/storeList')
