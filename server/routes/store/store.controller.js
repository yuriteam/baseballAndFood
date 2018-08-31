const asyncHandler = require('express-async-handler')
const Park = require('../../models/park')
const Store = require('../../models/store')
const Menu = require('../../models/menu')
const Review = require('../../models/review')

/**
 * GET /api/store/parkList
 */
exports.parkList = asyncHandler(async (req, res, next) => {
	let parks = await Park._list()
	res.json({ parks })
})

/**
 * GET /api/store/search
 * @param {String} park
 * @param {String} name
 * @param {String} cate
 * @param {String} tag
 */
exports.search = asyncHandler(async (req, res, next) => {
	const { park, name, cate, tag } = req.query
	const options = {}
	if (park) {
		options.park = park
	}
	if (name) {
		options.name = { $regex: name, $options: 'i' }
	}
	if (cate) {
		options.cate = cate
	}
	if (tag) {
		options.tag = tag
	}

	const stores = await Store._findByOptions(options)

	res.json({ stores })
})

/**
 * GET /api/store/:storeId
 * @param {String} storeId
 */
exports.detail = asyncHandler(async (req, res, next) => {
	const storeId = req.params.storeId
	let stores = await Store._findByStoreId(storeId)
	let reviews = await Review._findByStoreId(storeId)
	res.json({ stores, reviews })
})

/**
 * GET /api/store/:storeId/menuList
 * @param {String} storeId
 */
exports.menuList = asyncHandler(async (req, res, next) => {
	const storeId = req.params.storeId
	let menus = await Menu._findByStoreId(storeId)
	res.json({ menus })
})

/**
 * POST /api/store/review
 * @param {String} store
 * @param {String} content
 * @param {String} score
 */
exports.review = asyncHandler(async (req, res, next) => {
	const user = req.user._id
	const { store, content, score } = req.body

	const review = await Review._create(user, store, content, score)
	if (!review) throw new Error('리뷰 등록에 실패했습니다.')

	res.json({ review })
})
