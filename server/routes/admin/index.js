const express = require('express')
const router = express.Router()
const controller = require('./admin.controller')
const authMiddleWare = require('../../middlewares/auth')

router.use(authMiddleWare, (req, res, next) => {
	if (!req.user.admin) throw new Error('관리자 계정이 아닙니다.')
	next()
})

router.post('/addPark', controller.addPark)

module.exports = router
