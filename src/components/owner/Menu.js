import React from 'react'
import { ListGroupItem } from 'reactstrap'
const Menu = ({ menu }) => {
	return (
		<ListGroupItem>
			<span>{menu.name}</span>
			<span className="float-right">{menu.price}원</span>
		</ListGroupItem>
	)
}

export default Menu
