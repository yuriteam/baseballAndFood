import axios from 'axios'
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
