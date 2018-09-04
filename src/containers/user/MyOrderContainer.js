import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'reducers/user'
import MyOrderList from 'components/user/MyOrderList'

class MyOrderContainer extends Component {
	async componentDidMount() {
		const { getMyOrderList } = this.props

		try {
			await getMyOrderList()
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		const { orderList } = this.props
		return <MyOrderList orderList={orderList} />
	}
}

export default connect(
	({ user }) => ({
		orderList: user.orderList,
	}),
	dispatch => bindActionCreators(userActions, dispatch)
)(MyOrderContainer)
