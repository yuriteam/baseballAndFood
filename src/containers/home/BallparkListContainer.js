import React, { Component } from 'react'
import BallparkList from 'components/home/BallparkList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'reducers/base'

class BallparkListContainer extends Component {
	async componentDidMount() {
		const { getParkList } = this.props
		await getParkList()
	}

	render() {
		const { parks } = this.props
		return <BallparkList parks={parks} />
	}
}

export default connect(
	state => ({
		parks: state.base.parks,
	}),
	dispatch => bindActionCreators(baseActions, dispatch)
)(BallparkListContainer)
