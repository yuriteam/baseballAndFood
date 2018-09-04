import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import OwnerStoreList from 'components/owner/OwnerStoreList'
import AddStoreButton from 'components/owner/AddStoreButton'
import AddStoreModal from 'components/owner/AddStoreModal'

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

	toggleAddStoreModal = () => {
		const { toggleAddStoreModal } = this.props
		toggleAddStoreModal()
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
		const { onAddStoreSubmit, toggleAddStoreModal } = this
		const { parkList, cateList, storeList, addStoreModal } = this.props
		return (
			<Fragment>
				<AddStoreButton toggle={toggleAddStoreModal} />
				<OwnerStoreList storeList={storeList} />
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
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(OwnerContainer)
