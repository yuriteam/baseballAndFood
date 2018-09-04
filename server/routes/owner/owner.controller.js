const asyncHandler = require('express-async-handler')
const Store = require('../../models/store')
const Menu = require('../../models/menu')
const Order = require('../../models/order')

/**
 * GET /api/owner/storeList
 */
exports.storeList = asyncHandler(async (req, res, next) => {
	const stores = await Store._findByUserId(req.user._id)
	res.json({ stores })
})

/**
 * POST /api/owner/addStore
 * @param {String} name
 * @param {String} park
 * @param {String} category
 * @param {String} location
 * @param {String} phoneNumber
 * @param {Boolean} orderable
 */
exports.addStore = asyncHandler(async (req, res, next) => {
	let { name, park, category, location, phoneNumber, orderable } = req.body
	const owner = req.user._id
	orderable = orderable === 'Y'

	// location 임시
	location = {
		name: location,
		loc: {
			type: 'Point',
			coordinates: [0, 0],
		},
	}

	let store = await Store._create(name, owner, park, category, location, phoneNumber, orderable)
	if (!store) throw new Error('상점 등록에 실패했습니다.')

	store = await Store._findByStoreId(store._id)
	res.json({ store })
})

/**
 * POST /api/owner/addMenu
 * @param {String} store
 * @param {String} name
 * @param {String} price
 */
exports.addMenu = asyncHandler(async (req, res, next) => {
	let { store, name, price } = req.body
	price = Number(price)

	const menu = await Menu._create(store, name, price)
	if (!menu) throw new Error('메뉴 등록에 실패했습니다.')

	res.json({ message: '메뉴 등록에 성공했습니다.' })
})

/**
 * GET /api/owner/:storeId/orderList
 * @param {String} storeId
 */
exports.orderList = asyncHandler(async (req, res, next) => {
	const storeId = req.params.storeId
	// + 내 상점인지 확인

	const stores = await Order._findByStoreId(storeId)

	res.json({ stores })
})

/**
 * POST /api/owner/orderFinish
 * @param {String} orderId
 */
exports.orderFinish = asyncHandler(async (req, res, next) => {
	const { orderId } = req.body

	const order = Order._finishOrderById(orderId)
	if (!order) throw new Error('배송 완료 설정을 실패했습니다.')

	res.json({ message: '배송을 완료했습니다.' })
})
