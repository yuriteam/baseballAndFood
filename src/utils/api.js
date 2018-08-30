import axios from 'axios'
import auth from 'utils/auth'
axios.defaults.headers.common['Authorization'] = auth.authHeader()

export const login = ({ email, password }) => axios.post('/api/auth/login', { email, password })
