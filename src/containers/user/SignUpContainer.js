import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { register } from 'utils/api'
import SignUpForm from 'components/user/SignUpForm'

class SignUpContainer extends Component {
	onSubmit = async values => {
		try {
			if (values.password !== values.password_confirm) {
				throw new Error('비밀번호가 일치하지 않습니다.')
			}
			await register(values)
		} catch (e) {
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	render() {
		const { onSubmit } = this

		return (
			<Form
				onSubmit={onSubmit}
				render={({ submitSucceeded, ...props }) =>
					submitSucceeded ? (
						<Redirect to={{ pathname: '/login' }} />
					) : (
						<SignUpForm {...props} />
					)
				}
			/>
		)
	}
}

export default SignUpContainer
