import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'reducers/user'
import MyOrderList from 'components/user/MyOrderList'
import Loading from 'components/user/Loading'

class MyOrderContainer extends Component {
	async componentDidMount() {
		const { getMyOrderList, changeLoading } = this.props
		changeLoading(true)
		try {
			await getMyOrderList()
		} catch (e) {
			console.log(e)
		}
		changeLoading(false)
	}

	render() {
		const { orderList, loading } = this.props
		return <Fragment>{loading ? <Loading /> : <MyOrderList orderList={orderList} />}</Fragment>
	}
}

export default connect(
	({ user }) => ({
		loading: user.loading,
		orderList: user.orderList,
	}),
	dispatch => bindActionCreators(userActions, dispatch)
)(MyOrderContainer)
