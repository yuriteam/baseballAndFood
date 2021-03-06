import React, { Fragment } from 'react'
import Moment from 'moment'
import { Badge, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap'
import styles from './MyOrderList.scss'

const Order = ({ order }) => (
	<ListGroupItem>
		<h3 className="list-group-item-heading d-flex justify-content-between">
			<Badge color="primary" className="font-weight-bold p-2">
				{order.store.name}
			</Badge>
			<Badge color="secondary" className="font-weight-normal p-2">
				{order.finish ? '배달완료' : '배달중'}
			</Badge>
		</h3>
		<p className="mb-2 text-muted">{Moment(order.ordered).format('YYYY-MM-DD HH:mm')}</p>
		<ListGroupItemText className={['mb-0', styles.listText].join(' ')}>
			{order.menus.map((menu, i) => (
				<span key={'menu_' + menu._id}>{menu.name}</span>
			))}
		</ListGroupItemText>
	</ListGroupItem>
)

const MyOrderList = ({ orderList }) => (
	<Fragment>
		<h4 className="font-weight-bold mb-3">내 주문 보기</h4>
		<ListGroup>
			{orderList.size !== 0 &&
				orderList.map((order, i) => <Order key={'order_' + order._id} order={order} />)}
			{orderList.size === 0 && <ListGroupItem>주문 내역이 없습니다.</ListGroupItem>}
		</ListGroup>
	</Fragment>
)

export default MyOrderList
