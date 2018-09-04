import React, { Component, Fragment } from 'react'
import OwnerStoreList from 'components/owner/OwnerStoreList'
import AddStoreModal from 'components/owner/AddStoreModal'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as ownerActions from 'reducers/owner'
import { Form } from 'react-final-form'

class OwnerContainer extends Component {
	async componentDidMount() {
		const { getParkList } = this.props
		try {
			await getParkList()
		} catch (e) {
			console.log(e)
		}
	}
	addStore = values => {
		this.props.addStore(values)
	}
	render() {
		return (
			<Fragment>
				<OwnerStoreList
					storeList={this.props.storeList}
					toggleModal={this.props.toggleModal}
				/>
				<Form
					onSubmit={this.addStore}
					render={props => (
						<AddStoreModal
							{...props}
							modal={this.props.modal}
							toggleModal={this.props.toggleModal}
							parkList={this.props.parkList}
						/>
					)}
				/>
			</Fragment>
		)
	}
}

export default connect(
	({ owner }) => ({
		modal: owner.modal,
		storeList: owner.storeList,
		parkList: owner.parkList,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(withRouter(OwnerContainer))
