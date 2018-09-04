import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
import OwnerOrderList from 'components/owner/OwnerOrderList'

class OwnerOrderContainer extends Component {
	handleClick = async orderId => {
		const { finishOrder } = this.props
		try {
			await finishOrder({ orderId })
		} catch (e) {
			console.log(e)
		}
	}

	async componentDidMount() {
		const { match, getOwnerOrderList } = this.props
		try {
			await getOwnerOrderList(match.params)
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		const { handleClick } = this
		const { orderStore, orderList } = this.props

		return (
			orderStore && (
				<OwnerOrderList
					orderStore={orderStore}
					orderList={orderList}
					handleClick={handleClick}
				/>
			)
		)
	}
}

export default connect(
	({ owner }) => ({
		orderStore: owner.orderStore,
		orderList: owner.orderList,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(withRouter(OwnerOrderContainer))
