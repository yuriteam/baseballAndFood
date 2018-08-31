import React from 'react'
import { Field } from 'react-final-form'
import {
	Alert,
	Form,
	Button,
	CustomInput,
	ButtonGroup,
	Input,
	FormGroup,
	Col,
	Label,
} from 'reactstrap'
import styles from './SignUpForm.scss'

const SignUpForm = props => {
	const { handleSubmit, submitting, submitError } = props
	return (
		<Form className={['mx-auto mt-3', styles.form].join(' ')} onSubmit={handleSubmit}>
			<h6 className="font-weight-bold mb-3">회원가입</h6>
			<FormGroup row>
				<Col sm={10}>
					<Field name="isOwner" type="radio" value="Y">
						{({ input }) => (
							<CustomInput
								{...input}
								value="Y"
								type="radio"
								label="사장님"
								id="isOwner_Y"
								inline
							/>
						)}
					</Field>
					<Field name="isOwner" type="radio" value="N">
						{({ input }) => (
							<CustomInput
								value="N"
								{...input}
								type="radio"
								label="일반 회원"
								id="isOwner_N"
								inline
							/>
						)}
					</Field>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="email" sm={2}>
					Email
				</Label>
				<Col sm={10}>
					<Field name="email">
						{({ input }) => (
							<Input {...input} type="email" placeholder="E-mail" id="email" />
						)}
					</Field>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="password" sm={2}>
					비밀번호
				</Label>
				<Col sm={10}>
					<Field name="password">
						{({ input }) => (
							<Input
								{...input}
								type="password"
								placeholder="비밀번호"
								id="password"
							/>
						)}
					</Field>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="password_confirm" sm={2}>
					비밀번호 확인
				</Label>
				<Col sm={10}>
					<Field name="password_confirm">
						{({ input }) => (
							<Input
								{...input}
								type="password"
								placeholder="비밀번호 확인"
								id="password_confirm"
							/>
						)}
					</Field>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="user_name" sm={2}>
					이름
				</Label>
				<Col sm={10}>
					<Field name="user_name">
						{({ input }) => (
							<Input {...input} type="text" placeholder="이름" id="user_name" />
						)}
					</Field>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="phoneNumber" sm={2}>
					전화번호
				</Label>
				<Col sm={10}>
					<Field name="phoneNumber">
						{({ input }) => (
							<Input {...input} type="text" placeholder="전화번호	" id="phoneNumber" />
						)}
					</Field>
				</Col>
			</FormGroup>
			{submitError && (
				<Alert color="danger" className="small my-2">
					{submitError}
				</Alert>
			)}
			<ButtonGroup style={{ textAlign: 'center', display: 'block' }}>
				<Button
					color="primary"
					type="reset"
					disabled={submitting}
					size="lg"
					style={{ width: 150 }}
				>
					취소
				</Button>
				<Button
					color="success"
					type="submit"
					disabled={submitting}
					size="lg"
					style={{ width: 150 }}
				>
					회원가입
				</Button>
			</ButtonGroup>
		</Form>
	)
}

export default SignUpForm
