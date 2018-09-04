import React from 'react'
import { Button } from 'reactstrap'

const AddStoreButton = ({ toggle }) => (
	<div className="d-flex justify-content-end mb-3">
		<Button color="primary" size="lg" onClick={toggle}>
			상점 등록
		</Button>
	</div>
)

export default AddStoreButton
