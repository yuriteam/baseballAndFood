const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CateSchema = new Schema({
	name: String,
})

/**
 * static, method
 */
// 카테고리 생성
CateSchema.statics._create = function(name) {
	const cate = new this({
		name,
	})
	return cate.save()
}

// 야구장 리스트
CateSchema.statics._list = function() {
	return this.find({})
		.sort({ _id: 1 })
		.exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('cate', CateSchema)
