import React from 'react'
import { NavLink } from 'react-router-dom'
import auth from 'utils/auth'
import { Redirect } from 'react-router-dom'

const Header = () => {
	const isLogged = auth.getToken() !== null

	const renderButton = () => {
		if (!isLogged) {
			return (
				<div style={{ float: 'right' }}>
					<NavLink to="/login">로그인</NavLink>
					<NavLink to="/signup">회원가입</NavLink>
				</div>
			)
		}
		return (
			<div style={{ float: 'right' }}>
				<span>로그인 중</span>
				<NavLink to="/" onClick={auth.clearAppStorage}>
					로그아웃
				</NavLink>
			</div>
		)
	}

	return <header style={{ height: 50 }}>{renderButton()}</header>
}

export default Header
