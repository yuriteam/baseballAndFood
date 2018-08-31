import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { register } from 'utils/api'
import SignUpForm from 'components/user/SignUpForm'

export default class SignUpContainer extends Component {
	onSubmit = async values => {
		try {
			if (values.password !== values.password_confirm) {
				throw new Error('비밀번호가 일치하지 않습니다.')
			}
			const {
				data: { message: message },
			} = await register(values)
		} catch (e) {
			// const { message } = e.response.data
			// return { [FORM_ERROR]: message }
			return { [FORM_ERROR]: e.message }
		}
	}

	render() {
		const { onSubmit } = this
		const { from } = this.props

		return (
			<Form
				onSubmit={onSubmit}
				render={({ submitSucceeded, ...props }) =>
					submitSucceeded ? <Redirect to={'/'} /> : <SignUpForm {...props} />
				}
			/>
		)
	}
}
