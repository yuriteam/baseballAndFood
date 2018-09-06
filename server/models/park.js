const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParkSchema = new Schema({
	name: String,
	homeTeam: [String],
	location: {
		name: String,
		loc: {
			type: { type: String, default: 'Point' },
			coordinates: { type: [Number], index: '2dsphere' },
		},
	},
	image: String,
})

/**
 * static, method
 */
// 야구장 등록
ParkSchema.statics._create = function(name, homeTeam, location, image) {
	const park = new this({
		name,
		homeTeam,
		location,
		image,
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
