import React, { Fragment } from 'react'
import Moment from 'moment'
import { Button, Badge, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap'
import styles from './OwnerOrderList.scss'

const Order = ({ order, handleClick }) => (
	<ListGroupItem>
		<h3 className="list-group-item-heading d-flex justify-content-between">
			<Button color="primary" onClick={() => handleClick(order._id)}>
				배달 상태 변경
			</Button>
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

const MyOrderList = ({ orderStore, orderList, handleClick }) => (
	<Fragment>
		<h4 className="font-weight-bold mb-3">[{orderStore.name}] 의 주문 내역</h4>
		<ListGroup>
			{orderList.size !== 0 &&
				orderList.map((order, i) => (
					<Order key={'order_' + order._id} order={order} handleClick={handleClick} />
				))}
			{orderList.size === 0 && <ListGroupItem>이 매장에 주문이 없습니다.</ListGroupItem>}
		</ListGroup>
	</Fragment>
)

export default MyOrderList
