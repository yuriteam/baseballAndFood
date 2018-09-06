const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
	store: { type: Schema.Types.ObjectId, ref: 'store' },
	name: String,
	price: { type: Number, default: 0 },
	image: { type: String, default: '' },
})

MenuSchema.index({ store: 1 })

/**
 * static, method
 */
// 메뉴 생성
MenuSchema.statics._create = function(store, name, price) {
	const menu = new this({
		store,
		name,
		price,
	})
	return menu.save()
}

// 상점 인덱스로 메뉴들 가져오기
MenuSchema.statics._findByStoreId = function(store) {
	return this.find({ store }).exec()
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('menu', MenuSchema)
