import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'reducers/base'

class BaseContainer extends Component {
	async componentDidMount() {
		const { getParkList, getCateList } = this.props
		await getParkList()
		await getCateList()
	}

	render() {
		return <Fragment />
	}
}

export default connect(
	({ base }) => ({
		parkList: base.parkList,
		cateList: base.cateList,
	}),
	dispatch => bindActionCreators(baseActions, dispatch)
)(BaseContainer)
