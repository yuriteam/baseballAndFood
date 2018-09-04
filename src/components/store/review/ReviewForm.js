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
	return (
		<Fragment>
			{auth.getToken() !== null && (
				<Modal isOpen={isOpen} toggle={toggle}>
					<Form onSubmit={handleSubmit}>
						<ModalHeader toggle={toggle}>리뷰 등록</ModalHeader>
						<ModalBody>
							{submitError && (
								<Alert color="danger" className="small my-2">
									{submitError}
								</Alert>
							)}
							<Field name="store" component="input" type="hidden" />
							<FormGroup>
								{_.times(5, i => {
									i++
									return (
										<Field name="score" type="radio" value={i}>
											{({ input }) => (
												<CustomInput
													{...input}
													value={i}
													type="radio"
													label={i + '점'}
													id={'score_' + i}
													inline
												/>
											)}
										</Field>
									)
								})}
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
