const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const config = require('../config')

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		index: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	name: String,
	phoneNumber: String,
	isOwner: { type: Boolean, default: false },
	admin: { type: Boolean, default: false },
})

/**
 * static, method
 */
// 유저 생성
UserSchema.statics._create = function(email, password, name, phoneNumber, isOwner) {
	const encrypted = crypto
		.createHmac('sha1', config.secret)
		.update(password)
		.digest('base64')

	const user = new this({
		email,
		password: encrypted,
		name,
		phoneNumber,
		isOwner,
	})

	return user.save()
}

// 이메일로 유저 찾기
UserSchema.statics._findOneByEmail = function(email) {
	return this.findOne({ email }).exec()
}

// 유저 인스턴스 비밀번호 검증
UserSchema.methods.verify = function(password) {
	const encrypted = crypto
		.createHmac('sha1', config.secret)
		.update(password)
		.digest('base64')

	return this.password === encrypted
}

/**
 * 스키마 등록
 */
module.exports = mongoose.model('user', UserSchema)
