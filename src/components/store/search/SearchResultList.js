import React from 'react'
import { Row } from 'reactstrap'
import SearchResult from './SearchResult'

const SearchResultList = ({ storeList }) => (
	<main className="container py-3">
		<Row>
			{storeList.map((store, i) => (
				<SearchResult key={'store_' + store._id} store={store} />
			))}
		</Row>
	</main>
)

export default SearchResultList
