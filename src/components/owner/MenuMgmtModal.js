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
		return (
			<Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
				<ModalHeader toggle={this.props.toggleModal}>메뉴 관리</ModalHeader>
				<Form onSubmit={this.props.handleSubmit}>
					<ModalBody>
						<ListGroup>
							<ListGroupItem>
								<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
								<ListGroupItemText>ㅁㅁ</ListGroupItemText>
							</ListGroupItem>
						</ListGroup>
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
