const axios = require('axios')
const Store = require('./models/store')
const Park = require('./models/park')

async function updateAll() {
	const stores = await Store.find({})
		.lean()
		.exec()
	stores.forEach(async store => {
		const location = store.location.name
		const { data } = await axios.get(
			'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeURI(location),
			{ headers: { Authorization: 'KakaoAK 748b29a61c3e145b51f8172294a9ddfd' } }
		)
		const result = [data.documents[0].x, data.documents[0].y]
		console.log(result)
		let store2 = await Store.findByIdAndUpdate(
			store._id,
			{ $set: { 'location.loc.coordinates': result } },
			{ new: true }
		)
		console.log(store2.location.loc)
	})

	const parks = await Park.find({})
		.lean()
		.exec()
	parks.forEach(async park => {
		const location = park.location.name
		const { data } = await axios.get(
			'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeURI(location),
			{ headers: { Authorization: 'KakaoAK 748b29a61c3e145b51f8172294a9ddfd' } }
		)
		const result = [data.documents[0].x, data.documents[0].y]
		// console.log(result)
		await Park.findByIdAndUpdate(park._id, { $set: { 'location.loc.coordinates': result } })
	})
}

// updateAll()
