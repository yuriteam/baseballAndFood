// express 설정
const express = require('express')

// express 미들웨어
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const createError = require('http-errors')

// config
const config = require('./config')

// router
const routes = require('./routes')

// DB 연결
mongoose.connect(
	config.mongodbUri,
	{
		useNewUrlParser: true,
	}
)
require('./models/user')
require('./models/cate')
require('./models/menu')
require('./models/park')
require('./models/store')
require('./models/review')
require('./models/order')

// 앱 설정
const app = express()

// 로그
app.use(morgan('dev'))

// parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileUpload())

// JWT 설정
app.set('jwt-secret', config.secret)

// 라우터
app.use('/api', routes)

// require('./test')
// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	console.error(err)
	res.status(err.status || 500)
	res.json({ error: true, message: err.message })
})

module.exports = app
