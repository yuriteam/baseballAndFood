import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { upload } from 'utils/api'
import OwnerStoreList from 'components/owner/OwnerStoreList'
import AddStoreButton from 'components/owner/AddStoreButton'
import AddStoreModal from 'components/owner/AddStoreModal'
import MenuMgmtModal from 'components/owner/MenuMgmtModal'
import PostCodeModal from 'components/owner/PostCodeModal'

class OwnerContainer extends Component {
	changeFileInput = e => {
		const { changeFileInput } = this.props
		changeFileInput(e.target.files[0])
	}

	onAddStoreSubmit = async values => {
		const { imageFile, addStore, toggleAddStoreModal } = this.props

		const formData = new FormData()
		formData.append('file', imageFile)

		try {
			const {
				data: { image: image },
			} = await upload({ formData })
			values.image = image
			await addStore(values)
			toggleAddStoreModal()
		} catch (e) {
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	onMenuMgmtSubmit = async values => {
		const { addMenu, toggleMenuMgmtModal, selectedStoreKey } = this.props
		try {
			await addMenu({ ...values, store: selectedStoreKey })
			toggleMenuMgmtModal()
		} catch (e) {
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	toggleAddStoreModal = () => {
		const { changeFileInput, toggleAddStoreModal } = this.props
		toggleAddStoreModal()
	}

	togglePostCodeModal = values => {
		const { togglePostCodeModal } = this.props
		togglePostCodeModal(values)
	}

	toggleMenuMgmtModal = key => {
		const { toggleMenuMgmtModal } = this.props
		toggleMenuMgmtModal(key)
	}

	async componentDidMount() {
		const { getStoreList } = this.props

		try {
			await getStoreList()
		} catch (e) {
			console.log(e)
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return !this.props.postCodeModal.modal && nextProps.postCodeModal.modal
	// }

	render() {
		const {
			changeFileInput,
			onAddStoreSubmit,
			toggleAddStoreModal,
			togglePostCodeModal,
			toggleMenuMgmtModal,
			onMenuMgmtSubmit,
		} = this
		const {
			parkList,
			cateList,
			storeList,
			addStoreModal,
			postCodeModal,
			menuMgmtModal,
		} = this.props

		return (
			<Fragment>
				<AddStoreButton toggle={toggleAddStoreModal} />
				<OwnerStoreList storeList={storeList} toggle={toggleMenuMgmtModal} />
				<Form
					onSubmit={onAddStoreSubmit}
					initialValues={postCodeModal.parentInput}
					render={props => (
						<AddStoreModal
							{...props}
							isOpen={addStoreModal}
							toggle={() => {
								props.form.reset()
								toggleAddStoreModal()
							}}
							nestedToggle={togglePostCodeModal}
							parkList={parkList}
							cateList={cateList}
							changeFileInput={changeFileInput}
						/>
					)}
				/>
				<PostCodeModal toggle={togglePostCodeModal} />
				<Form
					onSubmit={onMenuMgmtSubmit}
					render={props => (
						<MenuMgmtModal
							{...props}
							isOpen={menuMgmtModal}
							toggle={() => {
								props.form.reset()
								toggleMenuMgmtModal()
							}}
						/>
					)}
				/>
			</Fragment>
		)
	}
}

export default connect(
	({ base, owner }) => ({
		parkList: base.parkList,
		cateList: base.cateList,
		storeList: owner.storeList,
		addStoreModal: owner.addStoreModal,
		postCodeModal: owner.postCodeModal,
		menuMgmtModal: owner.menuMgmtModal,
		selectedStoreKey: owner.selectedStoreKey,
		imageFile: owner.imageFile,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(OwnerContainer)
