import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import LoginContainer from 'containers/user/LoginContainer'

const LoginPage = props => {
	const { from } = props.location.state || { from: { pathname: '/' } }
	return (
		<PageTemplate>
			<LoginContainer from={from} />
		</PageTemplate>
	)
}

export default LoginPage
