import React from 'react'
import { Col, Row } from 'reactstrap'
import PageTemplate from 'components/common/PageTemplate'
import SignUpContainer from 'containers/user/SignUpContainer'

const SignUpPage = props => {
	const { from } = props.location.state || { from: { pathname: '/' } }
	return (
		<PageTemplate>
			<main className="container py-3">
				<Row>
					<Col lg="9" className="mx-auto">
						<SignUpContainer from={from} />
					</Col>
				</Row>
			</main>
		</PageTemplate>
	)
}

export default SignUpPage
