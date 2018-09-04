import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import auth from 'utils/auth'

class Header extends Component {
	logout = () => {
		auth.clearAppStorage()
		this.props.history.push('/login')
	}
	render() {
		const isLogged = auth.getToken() !== null
		const isOwner = isLogged && auth.getUserInfo().isOwner
		return (
			<nav className="navbar navbar-dark bg-primary static-top">
				<div className="container">
					<Link className="navbar-brand font-weight-bold" to="/">
						Baseball & Food
					</Link>
					{!isLogged && (
						<Link className="btn btn-primary" to="/login">
							로그인
						</Link>
					)}
					{isLogged && (
						<div>
							{isOwner && (
								<Link className="btn btn-primary" to="/owner">
									사장님
								</Link>
							)}
							<Button color="primary" onClick={this.logout}>
								로그아웃
							</Button>
						</div>
					)}
				</div>
			</nav>
		)
	}
}

export default withRouter(Header)
