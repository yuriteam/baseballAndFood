import React from 'react'
import { Field } from 'react-final-form'
import { Alert, Form, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import styles from './LoginForm.scss'

const LoginForm = props => {
	const { handleSubmit, submitting, submitError } = props
	return (
		<Form className={['mx-auto mt-3', styles.form].join(' ')} onSubmit={handleSubmit}>
			<h6 className="font-weight-bold mb-3">로그인</h6>
			<InputGroup className="mb-2">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<FontAwesomeIcon icon={faUser} />
					</InputGroupText>
				</InputGroupAddon>
				<Field name="email">
					{({ input }) => <Input {...input} type="email" placeholder="이메일" />}
				</Field>
			</InputGroup>
			<InputGroup className="mb-2">
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<FontAwesomeIcon icon={faKey} />
					</InputGroupText>
				</InputGroupAddon>
				<Field name="password">
					{({ input }) => <Input {...input} type="password" placeholder="비밀번호" />}
				</Field>
			</InputGroup>
			{submitError && (
				<Alert color="danger" className="small my-2">
					{submitError}
				</Alert>
			)}
			<Button color="primary" block type="submit" disabled={submitting}>
				로그인
			</Button>
		</Form>
	)
}

export default LoginForm
