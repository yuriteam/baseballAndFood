import React from 'react'
import { Row } from 'reactstrap'
import OwnerStore from './OwnerStore'

const OwnerStoreList = ({ storeList }) => (
	<Row>
		{storeList.map((store, i) => (
			<OwnerStore key={'store_' + store._id} store={store} />
		))}
	</Row>
)

export default OwnerStoreList
