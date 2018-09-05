const express = require('express')
const router = express.Router()
const controller = require('./upload.controller')
const authMiddleWare = require('../../middlewares/auth')

router.use(authMiddleWare)
router.post('/', controller.upload)

module.exports = router
