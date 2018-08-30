import { isEmpty } from 'lodash'

const TOKEN_KEY = 'jwtToken'
const parse = JSON.parse
const stringify = JSON.stringify

const auth = {
	/**
	 * get authHeader
	 */
	authHeader() {
		let token = auth.getToken()
		return token ? 'Bearer ' + token : ''
	},

	/**
	 * Remove an item from the used storage
	 * @param {String} key
	 */
	clear(key) {
		if (localStorage && localStorage.getItem(key)) {
			return localStorage.removeItem(key)
		}
		if (sessionStorage && sessionStorage.getItem(key)) {
			return sessionStorage.removeItem(key)
		}
		return null
	},

	/**
	 * clear all app storage
	 */
	clearAppStorage() {
		if (localStorage) {
			localStorage.clear()
		}
		if (sessionStorage) {
			sessionStorage.clear()
		}
	},
	clearToken(tokenKey = TOKEN_KEY) {
		return auth.clear(tokenKey)
	},

	/**
	 * Returns data from storage
	 * @param {String} key Item to get from the storage
	 * @return {String|Object} Data from the storage
	 */
	get(key) {
		if (localStorage && localStorage.getItem(key)) {
			return parse(localStorage.getItem(key)) || null
		}
		if (sessionStorage && sessionStorage.getItem(key)) {
			return parse(sessionStorage.getItem(key)) || null
		}
		return null
	},
	getToken(tokenKey = TOKEN_KEY) {
		return auth.get(tokenKey)
	},

	/**
	 * set data in storage
	 * @param {String|Object} value
	 * @param {String} key
	 * @param {Boolean} isLocalStorage Defines if we need to store in localStorage or sessionStorage
	 */
	set(value, key, isLocalStorage) {
		if (isEmpty(value)) {
			return null
		}
		if (isLocalStorage && localStorage) {
			return localStorage.setItem(key, stringify(value))
		}
		if (sessionStorage) {
			return sessionStorage.setItem(key, stringify(value))
		}
		return null
	},
	setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
		return auth.set(value, tokenKey, isLocalStorage)
	},
}

export default auth
