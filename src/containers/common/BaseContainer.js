import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'reducers/base'

class BaseContainer extends Component {
	async componentDidMount() {
		const { parkList, cateList, getParkList, getCateList } = this.props
		if (parkList === null || parkList.length === 0) await getParkList()
		if (cateList === null || cateList.length === 0) await getCateList()
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
