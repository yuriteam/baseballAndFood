import React from 'react'
import { NavLink } from 'react-router-dom'
import auth from 'utils/auth'

const Header = () => {
	const isLogged = auth.getToken() !== null
	return (
		<header>
			{!isLogged && (
				<React.Fragment>
					<NavLink to="/login">로그인</NavLink>
					<NavLink to="/signup">회원가입</NavLink>
				</React.Fragment>
			)}

			{isLogged && <div>로그인 중</div>}
		</header>
	)
}

export default Header
