import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import SearchResult from './SearchResult'

const SearchResultList = ({ storeList }) => (
	<main className="container py-3">
		<Row>
			{storeList.map((store, i) => (
				<SearchResult key={'store_' + store._id} store={store} />
			))}
			{storeList.size === 0 && (
				<Col xs="12" className="mb-3">
					<Card body>검색 결과 상점이 없습니다.</Card>
				</Col>
			)}
		</Row>
	</main>
)

export default SearchResultList
