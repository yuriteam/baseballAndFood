const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const controller = require('./store.controller')
const authMiddleWare = require('../../middlewares/auth')

router.get('/parkList', controller.parkList)
router.get('/cateList', controller.cateList)
router.get('/search', controller.search)

const authMiddleWare2 = (req, res, next) => {
	const token = req.headers.authorization
	if (!token) {
		req.user = null
	} else {
		const secret = req.app.get('jwt-secret')
		const decoded = jwt.verify(token.split(' ')[1], secret)
		req.user = decoded
	}
	next()
}

router.get('/:storeId', authMiddleWare2, controller.detail)

router.use(authMiddleWare)
router.get('/:storeId/menuList', controller.menuList)
router.post('/review', controller.review)
router.post('/order', controller.order)

module.exports = router
