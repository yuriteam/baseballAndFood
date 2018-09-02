import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'reducers/store'
import queryString from 'query-string'
import { Form } from 'react-final-form'
import SearchForm from 'components/store/search/SearchForm'
import SearchResultList from 'components/store/search/SearchResultList'

class SearchContainer extends Component {
	onSubmit = async values => {
		console.log(values)
		const { getStoreList } = this.props
		try {
			await getStoreList(values)
		} catch (e) {
			console.log(e)
		}
	}

	async componentDidMount() {
		const { location, getParkList, getStoreList } = this.props
		const query = queryString.parse(location.search)

		try {
			await getParkList()
			await getStoreList(query)
		} catch (e) {
			console.log(e)
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.users !== this.props.users;
	//   }

	render() {
		const { onSubmit } = this
		const { location, parkList } = this.props
		const query = queryString.parse(location.search)

		return (
			<Fragment>
				<Form
					onSubmit={onSubmit}
					initialValues={query}
					render={props => <SearchForm {...props} parkList={parkList} />}
				/>
				<SearchResultList />
			</Fragment>
		)
	}
}

export default connect(
	({ store }) => ({
		parkList: store.parkList,
		storeList: store.storeList,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(SearchContainer))
