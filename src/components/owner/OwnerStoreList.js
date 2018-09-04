import React from 'react'
import { Row } from 'reactstrap'
import OwnerStore from './OwnerStore'

const OwnerStoreList = ({ storeList, toggle }) => (
	<Row>
		{storeList.map((store, i) => (
			<OwnerStore key={'store_' + store._id} store={store} toggle={toggle} />
		))}
	</Row>
)

export default OwnerStoreList
