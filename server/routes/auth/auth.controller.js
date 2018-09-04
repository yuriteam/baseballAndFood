const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Order = require('../../models/order')

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
		name: user.name,
		phoneNumber: user.phoneNumber,
		isOwner: user.isOwner,
		admin: user.admin,
	}

	const token = jwt.sign(returnUser, secret, { expiresIn: '7d' })

	res.json({ user: returnUser, token: token })
})

/**
 * POST /api/auth/register
 * @param {String} email
 * @param {String} password
 * @param {String} name
 * @param {String} phoneNumber
 * @param {Boolean} isOwner
 */
exports.register = asyncHandler(async (req, res, next) => {
	let { email, password, name, phoneNumber, isOwner } = req.body
	isOwner = isOwner === 'Y'

	const user = await User._create(email, password, name, phoneNumber, isOwner)
	if (!user) throw new Error('회원가입에 실패했습니다.')

	res.json({ message: '회원가입에 성공했습니다.' })
})

/**
 * GET /api/auth/order
 */
exports.order = asyncHandler(async (req, res, next) => {
	const user = req.user._id
	const orders = await Order._findByUserId(user)
	res.json({ orders })
})
