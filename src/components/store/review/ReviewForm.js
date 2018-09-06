import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import {
	Alert,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	CustomInput,
} from 'reactstrap'
import auth from 'utils/auth'

const ReviewForm = props => {
	const { isOpen, toggle, handleSubmit, submitting, submitError } = props
	const { reset } = props.form
	return (
		<Fragment>
			{auth.getToken() !== null && (
				<Modal isOpen={isOpen} toggle={toggle}>
					<Form
						onSubmit={event => {
							handleSubmit(event).then(reset)
						}}
					>
						<ModalHeader toggle={toggle}>리뷰 등록</ModalHeader>
						<ModalBody>
							{submitError && (
								<Alert color="danger" className="small my-2">
									{submitError}
								</Alert>
							)}
							<Field name="store" component="input" type="hidden" />
							<FormGroup>
								<Fragment>
									<Field name="score" type="radio" value="1">
										{({ input }) => (
											<CustomInput
												{...input}
												value="1"
												type="radio"
												label="1점"
												id="score_1"
												inline
											/>
										)}
									</Field>
								</Fragment>
								<Fragment>
									<Field name="score" type="radio" value="2">
										{({ input }) => (
											<CustomInput
												{...input}
												value="2"
												type="radio"
												label="2점"
												id="score_2"
												inline
											/>
										)}
									</Field>
								</Fragment>
								<Fragment>
									<Field name="score" type="radio" value="3">
										{({ input }) => (
											<CustomInput
												{...input}
												value="3"
												type="radio"
												label="3점"
												id="score_3"
												inline
											/>
										)}
									</Field>
								</Fragment>
								<Fragment>
									<Field name="score" type="radio" value="4">
										{({ input }) => (
											<CustomInput
												{...input}
												value="4"
												type="radio"
												label="4점"
												id="score_4"
												inline
											/>
										)}
									</Field>
								</Fragment>
								<Fragment>
									<Field name="score" type="radio" value="5">
										{({ input }) => (
											<CustomInput
												{...input}
												value="5"
												type="radio"
												label="5점"
												id="score_5"
												inline
											/>
										)}
									</Field>
								</Fragment>
							</FormGroup>
							<FormGroup>
								<Label for="content">내용</Label>
								<Field
									name="content"
									component="textarea"
									className="form-control"
									rows="5"
								/>
							</FormGroup>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" type="submit" disabled={submitting}>
								등록
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
			)}
		</Fragment>
	)
}

export default ReviewForm
