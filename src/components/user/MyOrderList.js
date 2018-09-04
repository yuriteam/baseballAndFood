import React, { Fragment } from 'react'
import {
	Row,
	Col,
	Badge,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap'

const Order = ({ order }) => (
	<ListGroupItem>
		<h3 className="font-weight-bold list-group-item-heading d-flex justify-content-between">
			<Badge color="primary" className="p-2">
				{order.store.name}
			</Badge>
			<Badge color="secondary" className="p-2">
				{order.finish ? '배달완료' : '배달중'}
			</Badge>
		</h3>
		<ListGroupItemText>
			{order.menus.map((menu, i) => (
				<span key={'menu_' + menu._id}>{menu.name}</span>
			))}
		</ListGroupItemText>
	</ListGroupItem>
)

const MyOrderList = ({ orderList }) => (
	<Fragment>
		<h4>내 메뉴</h4>
		<ListGroup>
			{orderList.map((order, i) => (
				<Order key={'order_' + order._id} order={order} />
			))}
		</ListGroup>
	</Fragment>
)

export default MyOrderList
