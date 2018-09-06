import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ownerActions from 'reducers/owner'
import OwnerOrderList from 'components/owner/OwnerOrderList'
import Loading from 'components/owner/Loading'

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
		const { match, changeLoading, getOwnerOrderList } = this.props
		changeLoading(true)
		try {
			await getOwnerOrderList(match.params)
		} catch (e) {
			console.log(e)
		}
		changeLoading(false)
	}

	render() {
		const { handleClick } = this
		const { loading, orderStore, orderList } = this.props

		return (
			<Fragment>
				{loading ? (
					<Loading />
				) : (
					orderStore && (
						<OwnerOrderList
							orderStore={orderStore}
							orderList={orderList}
							handleClick={handleClick}
						/>
					)
				)}
			</Fragment>
		)
	}
}

export default connect(
	({ owner }) => ({
		loading: owner.loading,
		orderStore: owner.orderStore,
		orderList: owner.orderList,
	}),
	dispatch => bindActionCreators(ownerActions, dispatch)
)(withRouter(OwnerOrderContainer))
