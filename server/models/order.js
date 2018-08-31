const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'users' },
	store: { type: Schema.Types.ObjectId, ref: 'stores' },
	menu: [{ type: Schema.Types.ObjectId, ref: 'menus' }],
	finish: { type: Boolean, default: false },
})

/**
 * static, method
 */
// 주문 생성
OrderSchema.statics._create = function(user, store, menu) {
	const order = new this({
		user,
		store,
		menu,
	})
	return order.save()
}

// 상점 인덱스로 주문들 가져오기
OrderSchema.statics._findByStoreId = function(store) {
	return this.find({ store }).exec()
}

// 주문 인덱스로 주문 상태 변경
OrderSchema.statics._finishOrderById = function(_id) {
	return this.findByIdAndUpdate(_id, {
		$set: { finish: true },
	}).exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('order', OrderSchema)
