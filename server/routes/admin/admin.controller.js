const asyncHandler = require('express-async-handler')
const Park = require('../../models/park')

/**
 * POST /api/admin/addPark
 * @param {String} name
 */
exports.addPark = asyncHandler(async (req, res, next) => {
	const { name } = req.body
	const park = await Park._create(name, null)

	if (!park) throw new Error('야구장 등록에 실패했습니다.')

	res.json({ message: '야구장 등록에 성공했습니다.' })
})
