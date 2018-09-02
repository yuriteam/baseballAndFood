import React from 'react'
import { Link } from 'react-router-dom'
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

const SignUpForm = props => {
	const { handleSubmit, submitting, submitError } = props
	return (
		<Form onSubmit={handleSubmit}>
			<h5 className="font-weight-bold mb-3">회원가입</h5>
			<FormGroup row>
				<Col sm={10}>
					<Field name="isOwner" type="radio" value="N">
						{({ input }) => (
							<CustomInput
								value="N"
								{...input}
								type="radio"
								label="일반 회원"
								id="isOwner_N"
								inline
								checked
							/>
						)}
					</Field>
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
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="email" sm={2}>
					Email
				</Label>
				<Col sm={10}>
					<Field
						name="email"
						type="email"
						component="input"
						placeholder="이메일"
						className="form-control"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="password" sm={2}>
					비밀번호
				</Label>
				<Col sm={10}>
					<Field
						name="password"
						type="password"
						component="input"
						placeholder="비밀번호"
						className="form-control"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="password_confirm" sm={2}>
					비밀번호 확인
				</Label>
				<Col sm={10}>
					<Field
						name="password_confirm"
						type="password"
						component="input"
						placeholder="비밀번호 확인"
						className="form-control"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="user_name" sm={2}>
					이름
				</Label>
				<Col sm={10}>
					<Field
						name="user_name"
						component="input"
						placeholder="이름"
						className="form-control"
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="phoneNumber" sm={2}>
					전화번호
				</Label>
				<Col sm={10}>
					<Field
						name="phoneNumber"
						component="input"
						placeholder="전화번호"
						className="form-control"
					/>
				</Col>
			</FormGroup>
			{submitError && (
				<Alert color="danger" className="small my-2">
					{submitError}
				</Alert>
			)}
			<ButtonGroup className="d-block text-center">
				<Button color="primary" type="submit" disabled={submitting} style={{ width: 150 }}>
					회원가입
				</Button>
				<Link className="btn btn-secondary" style={{ width: 150 }} to="/">
					취소
				</Link>
			</ButtonGroup>
		</Form>
	)
}

export default SignUpForm
