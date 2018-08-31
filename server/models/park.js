const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParkSchema = new Schema({
	name: String,
	location: {
		name: String,
		loc: {
			type: { type: String, default: 'Point' },
			coordinates: { type: [Number], index: '2dsphere' },
		},
	},
})

/**
 * static, method
 */
// 야구장 등록
ParkSchema.statics._create = function(name, location) {
	const park = new this({
		name,
		location,
	})
	return park.save()
}

// 야구장 리스트
ParkSchema.statics._list = function() {
	return this.find({})
		.sort({ _id: 1 })
		.exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('park', ParkSchema)
