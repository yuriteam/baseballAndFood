const express = require('express')
const router = express.Router()
const controller = require('./store.controller')
const authMiddleWare = require('../../middlewares/auth')

router.get('/parkList', controller.parkList)
router.get('/cateList', controller.cateList)
router.get('/search', controller.search)
router.get('/:storeId', controller.detail)

router.use(authMiddleWare)

router.get('/:storeId/menuList', controller.menuList)
router.post('/review', controller.review)

module.exports = router
