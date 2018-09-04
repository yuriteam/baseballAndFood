const express = require('express')
const router = express.Router()
const controller = require('./owner.controller')
const authMiddleWare = require('../../middlewares/auth')

router.use(authMiddleWare, (req, res, next) => {
	if (!req.user.isOwner) throw new Error('상점주 계정이 아닙니다.')
	next()
})

router.get('/storeList', controller.storeList)
router.post('/addStore', controller.addStore)
router.post('/addMenu', controller.addMenu)
router.get('/:storeId/orderList', controller.orderList)
router.post('/finishOrder', controller.finishOrder)

module.exports = router
