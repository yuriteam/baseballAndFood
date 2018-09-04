import React, { Component } from 'react'
import {
	Button,
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

export default class AddStoreModal extends Component {
	render() {
		return (
			<Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
				<ModalHeader toggle={this.props.toggleModal}>매장 추가</ModalHeader>
				<Form onSubmit={this.props.handleSubmit}>
					<ModalBody>
						<FormGroup row>
							<Label for="storeName" sm={2}>
								매장명
							</Label>
							<Col sm={10}>
								<Field
									name="storeName"
									type="text"
									component="input"
									id="storeName"
									className="form-control"
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="ballpark" sm={2}>
								매장명
							</Label>
							<Col sm={10}>
								<Field name="park" component="select" className="custom-select">
									{this.props.parkList.map((park, i) => (
										<option key={'park' + i} value={park._id}>
											{park.name}
										</option>
									))}
								</Field>
							</Col>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" type="submit" disabled={this.props.submitting}>
							추가
						</Button>
						<Button color="secondary" onClick={this.props.toggleModal}>
							취소
						</Button>
					</ModalFooter>
				</Form>
			</Modal>
		)
	}
}
