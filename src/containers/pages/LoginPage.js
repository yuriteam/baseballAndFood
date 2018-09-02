import React from 'react'
import { Col, Row } from 'reactstrap'
import PageTemplate from 'components/common/PageTemplate'
import LoginContainer from 'containers/user/LoginContainer'

const LoginPage = props => {
	const { from } = props.location.state || { from: { pathname: '/' } }
	return (
		<PageTemplate>
			<main className="container py-3">
				<Row>
					<Col xs="10" md="8" lg="5" className="mx-auto">
						<LoginContainer from={from} />
					</Col>
				</Row>
			</main>
		</PageTemplate>
	)
}

export default LoginPage
