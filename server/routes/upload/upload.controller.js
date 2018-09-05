const asyncHandler = require('express-async-handler')
const path = require('path')

/**
 * POST /api/upload
 */
exports.upload = asyncHandler(async (req, res, next) => {
	const imageFile = req.files.file
	const uploadPath = path.join(__dirname, '../../public/upload')
	await imageFile.mv(`${uploadPath}/${imageFile.name}`)
	res.json({ image: imageFile.name })
})
