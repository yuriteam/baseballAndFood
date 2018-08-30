const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const config = require('../config')

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		index: { unique: true },
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	created: { type: Date, default: Date.now },
	admin: { type: Boolean, default: false },
})

/**
 * static, method
 */
UserSchema.statics._create = function(email, password) {
	const encrypted = crypto
		.createHmac('sha1', config.secret)
		.update(password)
		.digest('base64')
	const user = new this({
		email,
		password: encrypted,
	})
	return user.save()
}

UserSchema.statics._findOneByEmail = function(email) {
	return this.findOne({ email }).exec()
}

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
