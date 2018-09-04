import React from 'react'
import {
	Col,
	Card,
	CardBody,
	CardText,
	CardSubtitle,
	CardTitle,
	CardFooter,
	Button,
} from 'reactstrap'

const OwnerStore = ({ store }) => (
	<Col xs="12" className="mb-3">
		<Card>
			<CardBody>
				<CardTitle className="d-flex justify-content-between">
					<div className="font-weight-bold text-primary">{store.name}</div>
					<div className="badge badge-secondary">{store.category.name}</div>
				</CardTitle>
				<CardSubtitle className="text-muted mb-3">{store.park.name}</CardSubtitle>
				<CardText>{store.location.name}</CardText>
			</CardBody>
			<CardFooter className="text-right">
				<Button color="primary">메뉴 등록</Button>
			</CardFooter>
		</Card>
	</Col>
)

export default OwnerStore
