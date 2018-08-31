import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import SignUpContainer from 'containers/user/SignUpContainer'

const SignUpPage = props => {
	const { from } = props.location.state || { from: { pathname: '/' } }
	return (
		<PageTemplate>
			<SignUpContainer from={from} />
		</PageTemplate>
	)
}

export default SignUpPage
