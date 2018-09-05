import React, { Fragment } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const Menu = ({ menu }) => (
	<Col xs="6" sm="4" md="3" lg="2" className="mb-3">
		<Card>
			<CardImg
				top
				width="100%"
				src="https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97300&w=300&h=300"
			/>
			<CardBody className="p-3 text-center">{menu.name}</CardBody>
		</Card>
	</Col>
)

const MenuList = ({ menuList }) => (
	<Row>
		{menuList.map((menu, i) => (
			<Menu key={'menu_' + menu._id} menu={menu} />
		))}
		{menuList.size == 0 && (
			<Col xs="11" className="mx-auto p-3 border rounded">
				주문 가능한 메뉴가 없습니다.
			</Col>
		)}
	</Row>
)

export default MenuList
