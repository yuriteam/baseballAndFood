const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: String,
	owner: { type: Schema.Types.ObjectId, ref: 'users' },
	park: { type: Schema.Types.ObjectId, ref: 'parks' },
	category: { type: Schema.Types.ObjectId, ref: 'cates' },
	location: {
		name: String,
		loc: {
			type: { type: String, default: 'Point' },
			coordinates: { type: [Number], index: '2dsphere' },
		},
	},
	phoneNumber: String,
	tags: [{ type: Schema.Types.ObjectId, ref: 'tags' }],
	orderable: { type: Boolean, default: false },
})

StoreSchema.index({ owner: 1 })
StoreSchema.index({ park: 1 })
StoreSchema.index({ category: 1 })
StoreSchema.index({ tags: 1 })

/**
 * static, method
 */
// 상점 생성
StoreSchema.statics._create = function(
	name,
	owner,
	park,
	category,
	location,
	phoneNumber,
	tags,
	orderable
) {
	const store = new this({
		name,
		owner,
		park,
		category,
		location,
		phoneNumber,
		tags,
		orderable,
	})
	return store.save()
}

// 상점 조건(park, name, cate, tag)으로 찾기
StoreSchema.statics._findByOptions = function(options) {
	return this.find(options).exec()
	//return this.find({ name: { $regex: name, $options: 'i' } }).exec()
}

// 상점 인덱스로 상점 찾기
StoreSchema.statics._findByStoreId = function(_id) {
	return this.findById(_id).exec()
}

// 유저 인덱스로 상점들 찾기
StoreSchema.statics._findByUserId = function(user) {
	return this.find({ user }).exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('store', StoreSchema)
