import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import OwnerStoreList from 'components/owner/OwnerStoreList'
import AddStoreButton from 'components/owner/AddStoreButton'
import AddStoreModal from 'components/owner/AddStoreModal'
import MenuMgmtModal from 'components/owner/MenuMgmtModal'
import PostCodeModal from 'components/owner/PostCodeModal'

class OwnerContainer extends Component {
	onAddStoreSubmit = async values => {
		const { addStore, toggleAddStoreModal } = this.props
		try {
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
		const { toggleAddStoreModal } = this.props
		toggleAddStoreModal()
	}

	togglePostCodeModal = () => {
		const { togglePostCodeModal } = this.props
		togglePostCodeModal()
	}

	toggleMenuMgmtModal = async key => {
		const { toggleMenuMgmtModal, getMenuList } = this.props
		try {
			if (key) await getMenuList(key)
			toggleMenuMgmtModal(key)
		} catch (e) {
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	async componentDidMount() {
		const { getStoreList } = this.props
		try {
			await getStoreList()
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		const {
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
			changeInput,
			selectedStoreMenu,
		} = this.props
		return (
			<Fragment>
				<AddStoreButton toggle={toggleAddStoreModal} />
				<OwnerStoreList storeList={storeList} toggle={toggleMenuMgmtModal} />
				<Form
					onSubmit={onAddStoreSubmit}
					initialValues={{ location: postCodeModal.input }}
					render={props => (
						<AddStoreModal
							{...props}
							isOpen={addStoreModal}
							toggle={() => {
								changeInput('')
								props.form.reset()
								toggleAddStoreModal()
							}}
							nestedToggle={togglePostCodeModal}
							parkList={parkList}
							cateList={cateList}
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
							selectedStoreMenu={selectedStoreMenu}
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
		selectedStoreMenu: owner.selectedStoreMenu,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(OwnerContainer)
