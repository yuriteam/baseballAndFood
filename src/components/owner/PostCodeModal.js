import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
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
	Input,
} from 'reactstrap'
import DaumPostcode from 'react-daum-postcode'

class PostCodeModal extends Component {
	handleAddress = data => {
		let fullAddress = data.address
		let extraAddress = ''

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname
			}
			if (data.buildingName !== '') {
				extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
		}

		const { changeInput } = this.props
		changeInput(fullAddress)
	}

	render() {
		const { handleClick, handleAddress } = this
		const { toggle, postCodeModal } = this.props
		const { input, modal } = postCodeModal

		return (
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>주소 입력</ModalHeader>
				<ModalBody>
					<FormGroup>
						<Input name="address" placeholder="주소" readOnly value={input} />
					</FormGroup>
					<FormGroup className="border rounded">
						<DaumPostcode onComplete={handleAddress} />
					</FormGroup>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>
						등록
					</Button>
				</ModalFooter>
			</Modal>
		)
	}
}

export default connect(
	({ base, owner }) => ({
		postCodeModal: owner.postCodeModal,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(PostCodeModal)
