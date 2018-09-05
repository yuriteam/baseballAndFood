const axios = require('axios')
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
 * @param {String} image
 */
exports.addStore = asyncHandler(async (req, res, next) => {
	let { name, park, category, location, phoneNumber, orderable, image } = req.body
	const owner = req.user._id
	orderable = orderable === 'Y'

	const { data } = await axios.get(
		'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeURI(location),
		{ headers: { Authorization: 'KakaoAK 748b29a61c3e145b51f8172294a9ddfd' } }
	)

	location = {
		name: location,
		loc: {
			type: 'Point',
			coordinates: [data.documents[0].x, data.documents[0].y],
		},
	}

	let store = await Store._create(
		name,
		owner,
		park,
		category,
		location,
		phoneNumber,
		orderable,
		image
	)
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
	const store = await Store._findByStoreId(storeId)
	const orders = await Order._findByStoreId(storeId)

	res.json({ store, orders })
})

/**
 * POST /api/owner/finishOrder
 * @param {String} orderId
 */
exports.finishOrder = asyncHandler(async (req, res, next) => {
	const { orderId } = req.body

	const order = Order._finishOrderById(orderId)
	if (!order) throw new Error('배송 완료 설정을 실패했습니다.')

	res.json({ orderId })
})
