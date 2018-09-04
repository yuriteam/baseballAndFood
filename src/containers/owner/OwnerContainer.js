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

class OwnerContainer extends Component {
	onAddStoreSubmit = async values => {
		const { addStore, toggleAddStoreModal } = this.props
		try {
			await addStore(values)
			toggleAddStoreModal()
		} catch (e) {
			return { [FORM_ERROR]: e.message }
		}
	}

	onMenuMgmtSubmit = async values => {
		const { addMenu, toggleMenuMgmtModal, selectedStoreKey } = this.props
		try {
			await addMenu({ ...values, store: selectedStoreKey })
			toggleMenuMgmtModal()
		} catch (e) {
			return { [FORM_ERROR]: e.message }
		}
	}

	toggleAddStoreModal = () => {
		const { toggleAddStoreModal } = this.props
		toggleAddStoreModal()
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

	render() {
		const {
			onAddStoreSubmit,
			toggleAddStoreModal,
			toggleMenuMgmtModal,
			onMenuMgmtSubmit,
		} = this
		const { parkList, cateList, storeList, addStoreModal, menuMgmtModal } = this.props
		return (
			<Fragment>
				<AddStoreButton toggle={toggleAddStoreModal} />
				<OwnerStoreList storeList={storeList} toggle={toggleMenuMgmtModal} />
				<Form
					onSubmit={onAddStoreSubmit}
					render={props => (
						<AddStoreModal
							{...props}
							isOpen={addStoreModal}
							toggle={toggleAddStoreModal}
							parkList={parkList}
							cateList={cateList}
						/>
					)}
				/>
				<Form
					onSubmit={onMenuMgmtSubmit}
					render={props => (
						<MenuMgmtModal
							{...props}
							isOpen={menuMgmtModal}
							toggle={toggleMenuMgmtModal}
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
		menuMgmtModal: owner.menuMgmtModal,
		selectedStoreKey: owner.selectedStoreKey,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(OwnerContainer)
