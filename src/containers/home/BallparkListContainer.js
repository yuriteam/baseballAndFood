import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'reducers/base'
import BallparkList from 'components/home/BallparkList'

class BallparkListContainer extends Component {
	async componentDidMount() {
		const { getParkList } = this.props
		await getParkList()
	}

	render() {
		const { parkList } = this.props
		return <BallparkList parkList={parkList} />
	}
}

export default connect(
	({ base }) => ({
		parkList: base.parkList,
	}),
	dispatch => bindActionCreators(baseActions, dispatch)
)(BallparkListContainer)
