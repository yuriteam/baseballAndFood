const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'users' },
	store: { type: Schema.Types.ObjectId, ref: 'stores' },
	content: String,
	score: Number,
})

ReviewSchema.index({ user: 1 })
ReviewSchema.index({ store: 1 })

/**
 * static, method
 */
// 리뷰 생성
ReviewSchema.statics._create = function(user, store, content, score) {
	const review = new this({
		user,
		store,
		content,
		score,
	})
	return review.save()
}

// 상점 인덱스로 리뷰들 찾기
ReviewSchema.statics._findByStoreId = function(store) {
	return this.find({ store }).exec()
}

// 리뷰 인덱스로 리뷰 삭제
ReviewSchema.statics._deleteById = function(_id) {
	return this.findByIdAndRemove(_id).exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('review', ReviewSchema)
