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
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
} from 'reactstrap'
import { Field } from 'react-final-form'

export default class MenuMgmtModal extends Component {
	render() {
		const { isOpen, toggle, handleSubmit, submitting } = this.props
		return (
			<Modal isOpen={isOpen} toggle={toggle}>
				<ModalHeader toggle={toggle}>메뉴 관리</ModalHeader>
				<Form onSubmit={handleSubmit}>
					<ModalBody>
						<FormGroup row>
							<Label for="name" sm={2}>
								이름
							</Label>
							<Col sm={10}>
								<Field
									name="name"
									type="text"
									component="input"
									id="name"
									className="form-control"
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="price" sm={2}>
								가격
							</Label>
							<Col sm={10}>
								<Field
									name="price"
									type="number"
									component="input"
									id="price"
									className="form-control"
								/>
							</Col>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" type="submit" disabled={submitting}>
							추가
						</Button>
						<Button color="secondary" onClick={toggle}>
							취소
						</Button>
					</ModalFooter>
				</Form>
			</Modal>
		)
	}
}
