const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagSchema = new Schema({
	name: String,
})

/**
 * static, method
 */
// 태그 생성
TagSchema.statics._create = function(name) {
	const tag = new this({
		name,
	})
	return tag.save()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('tag', TagSchema)
