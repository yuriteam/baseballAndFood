import React from 'react'
import { ListGroup } from 'reactstrap'
import Menu from './Menu'
const MenuList = ({ menus }) => {
	return (
		<ListGroup className="mb-5">
			{menus.map((menu, i) => {
				return <Menu key={'menu' + i} menu={menu} />
			})}
		</ListGroup>
	)
}

export default MenuList
