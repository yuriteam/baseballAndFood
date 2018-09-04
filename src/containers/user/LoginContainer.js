import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { login } from 'utils/api'
import auth from 'utils/auth'
import LoginForm from 'components/user/LoginForm'

class LoginContainer extends Component {
	onSubmit = async values => {
		try {
			const {
				data: { token: token, user: user },
			} = await login(values)
			auth.setToken(token, true)
			auth.setUserInfo(user, true)
		} catch (e) {
			return { [FORM_ERROR]: e.message }
		}
	}

	render() {
		const { onSubmit } = this
		const { from } = this.props

		if (auth.getToken() !== null) {
			return <Redirect to={{ pathname: '/' }} />
		}

		return (
			<Form
				onSubmit={onSubmit}
				render={({ submitSucceeded, ...props }) =>
					submitSucceeded ? <Redirect to={from} /> : <LoginForm {...props} />
				}
			/>
		)
	}
}

export default LoginContainer
