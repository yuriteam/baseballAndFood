const express = require('express')
const router = express.Router()
const controller = require('./auth.controller')
const authMiddleWare = require('../../middlewares/auth')

router.post('./login', controller.login)
router.post('./register', controller.register)
// router.use(authMiddleWare)

module.exports = router
