import React from 'react'
import { Link } from 'react-router-dom'
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

const OwnerStore = ({ store, toggle }) => (
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
			<CardFooter className="d-flex justify-content-between">
				<Link to={'/owner/' + store._id + '/order'} className="btn btn-primary">
					주문 확인
				</Link>
				<Button
					color="primary"
					onClick={() => {
						toggle(store._id)
					}}
				>
					메뉴 등록
				</Button>
			</CardFooter>
		</Card>
	</Col>
)

export default OwnerStore
