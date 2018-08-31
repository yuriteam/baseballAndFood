const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/admin', require('./admin'))
router.use('/owner', require('./owner'))
router.use('/store', require('./store'))

module.exports = router
