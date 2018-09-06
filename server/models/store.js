const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = new Schema({
	name: String,
	owner: { type: Schema.Types.ObjectId, ref: 'user' },
	park: { type: Schema.Types.ObjectId, ref: 'park' },
	category: { type: Schema.Types.ObjectId, ref: 'cate' },
	location: {
		name: String,
		loc: {
			type: { type: String, default: 'Point' },
			coordinates: { type: [Number], index: '2dsphere' },
		},
	},
	phoneNumber: String,
	destination: String,
	orderable: { type: Boolean, default: false },
	image: String,
})

StoreSchema.index({ owner: 1 })
StoreSchema.index({ park: 1 })
StoreSchema.index({ category: 1 })

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
	destination,
	orderable,
	image
) {
	const store = new this({
		name,
		owner,
		park,
		category,
		location,
		phoneNumber,
		destination,
		orderable,
		image,
	})
	return store.save()
}

// 상점 조건(park, name, cate)으로 찾기
// StoreSchema.statics._findByOptions = function(options) {
// 	return this.find(options)
// 		.populate('owner')
// 		.populate({ path: 'park', select: 'name' })
// 		.populate('category')
// 		.exec()
// }
StoreSchema.statics._findByOptions = async function(options) {
	let config = [
		{
			$lookup: {
				from: 'reviews',
				localField: '_id',
				foreignField: 'store',
				as: 'scores',
			},
		},
		{ $unwind: { path: '$scores', preserveNullAndEmptyArrays: true } },
		{
			$group: {
				_id: '$_id',
				name: { $first: '$name' },
				owner: { $first: '$owner' },
				park: { $first: '$park' },
				category: { $first: '$category' },
				location: { $first: '$location' },
				phoneNumber: { $first: '$phoneNumber' },
				destination: { $first: '$destination' },
				orderable: { $first: '$orderable' },
				image: { $first: '$image' },
				avg: { $avg: '$scores.score' },
			},
		},
		{ $sort: { _id: 1 } },
	]
	if (Object.keys(options).length > 0) {
		config.unshift({ $match: options })
	}
	let result = await this.aggregate(config)
	result = await this.populate(result, { path: 'owner' })
	result = await this.populate(result, { path: 'park' })
	result = await this.populate(result, { path: 'category' })
	return result
}

// 상점 인덱스로 상점 찾기
StoreSchema.statics._findByStoreId = function(_id) {
	return this.findById(_id)
		.populate('owner')
		.populate({ path: 'park', select: 'name' })
		.populate('category')
		.lean()
		.exec()
}

// 유저 인덱스로 상점들 찾기
StoreSchema.statics._findByUserId = function(owner) {
	return this.find({ owner })
		.populate('owner')
		.populate({ path: 'park', select: 'name' })
		.populate('category')
		.exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('store', StoreSchema)
