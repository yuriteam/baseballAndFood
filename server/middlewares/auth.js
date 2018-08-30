const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization
	if (!token) throw new Error('로그인한 회원이 아닙니다.')

	const secret = req.app.get('jwt-secret')
	const decoded = jwt.verify(token.split(' ')[1], secret)

	req.user = decoded
	next()
}

module.exports = authMiddleware
