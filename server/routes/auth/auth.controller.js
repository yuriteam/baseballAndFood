const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

/**
 * POST /api/auth/login
 * @param {String} email
 * @param {String} password
 */
exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body
	const secret = req.app.get('jwt-secret')

	const user = await User._findOneByEmail(email)
	if (!user || !user.verify(password)) {
		throw new Error('아이디나 비밀번호가 다릅니다.')
	}

	const returnUser = {
		_id: user._id,
		email: user.email,
		admin: user.admin,
	}

	const token = jwt.sign(returnUser, secret, { expiresIn: '7d' })

	res.json({ token })
})
