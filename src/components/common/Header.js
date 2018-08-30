import React from 'react'
import { NavLink } from 'react-router-dom'
import auth from 'utils/auth'

const Header = () => {
	const isLogged = auth.getToken() !== null
	return (
		<header>
			{!isLogged && <NavLink to="/login">로그인</NavLink>}
			{isLogged && <div>로그인 중</div>}
		</header>
	)
}

export default Header
