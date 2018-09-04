import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'reducers/store'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { addOrder } from 'utils/api'
import OrderForm from 'components/store/order/OrderForm'

class OrderContainer extends Component {
	onSubmit = async values => {
		try {
			await addOrder(values)
		} catch (e) {
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	async componentDidMount() {
		const { match, getStoreDetail } = this.props
		try {
			await getStoreDetail(match.params)
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		const { onSubmit } = this
		const { storeDetail } = this.props
		const { store, menuList } = storeDetail

		return (
			<Fragment>
				{store && (
					<Form
						onSubmit={onSubmit}
						initialValues={{ store: store._id }}
						render={({ submitSucceeded, ...props }) =>
							submitSucceeded ? (
								<Redirect to={{ pathname: '/myorder' }} />
							) : (
								<OrderForm {...props} store={store} menuList={menuList} />
							)
						}
					/>
				)}
			</Fragment>
		)
	}
}

export default connect(
	({ store }) => ({
		storeDetail: store.storeDetail,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(OrderContainer))
