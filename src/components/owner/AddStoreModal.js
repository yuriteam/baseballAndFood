import React from 'react'
import {
	Button,
	Alert,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Label,
	Col,
	Form,
	CustomInput,
} from 'reactstrap'
import { Field } from 'react-final-form'
import PostCodeModal from 'components/owner/PostCodeModal'

const AddStoreModal = props => {
	const {
		isOpen,
		toggle,
		nestedToggle,
		parkList,
		cateList,
		handleSubmit,
		submitting,
		submitError,
	} = props
	const { reset } = props.form
	return (
		<Modal isOpen={isOpen} toggle={toggle} size="lg">
			<Form
				onSubmit={event => {
					handleSubmit(event).then(reset)
				}}
			>
				<ModalHeader toggle={toggle}>매장 추가</ModalHeader>
				<ModalBody>
					{submitError && (
						<Alert color="danger" className="small my-2">
							{submitError}
						</Alert>
					)}
					<FormGroup row>
						<Label for="name" sm="2">
							매장명
						</Label>
						<Col sm="10">
							<Field
								name="name"
								component="input"
								className="form-control"
								placeholder="매장명"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="park" sm="2">
							야구장
						</Label>
						<Col sm="10">
							<Field name="park" component="select" className="custom-select">
								{parkList.map((park, i) => (
									<option key={'park_' + park._id} value={park._id}>
										{park.name}
									</option>
								))}
							</Field>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="category" sm="2">
							분류
						</Label>
						<Col sm="10">
							<Field name="category" component="select" className="custom-select">
								<option value="">선택</option>
								{cateList.map((cate, i) => (
									<option key={'cate_' + cate._id} value={cate._id}>
										{cate.name}
									</option>
								))}
							</Field>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="location" sm="2">
							주소
						</Label>
						<Col sm="10">
							<Field
								name="location"
								component="input"
								placeholder="주소"
								className="form-control"
								onClick={nestedToggle}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="phoneNumber" sm="2">
							전화번호
						</Label>
						<Col sm="10">
							<Field
								name="phoneNumber"
								component="input"
								placeholder="전화번호"
								className="form-control"
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for="orderable" sm="2">
							배달가능여부
						</Label>
						<Col sm="10">
							<Field name="orderable" type="radio" value="Y">
								{({ input }) => (
									<CustomInput
										{...input}
										value="Y"
										type="radio"
										label="가능"
										id="orderable_Y"
										inline
									/>
								)}
							</Field>
							<Field name="orderable" type="radio" value="N">
								{({ input }) => (
									<CustomInput
										{...input}
										value="N"
										type="radio"
										label="불가능"
										id="orderable_N"
										inline
									/>
								)}
							</Field>
						</Col>
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" type="submit" disabled={submitting}>
						등록
					</Button>
				</ModalFooter>
			</Form>
		</Modal>
	)
}

export default AddStoreModal
