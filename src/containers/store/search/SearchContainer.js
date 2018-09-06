import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'reducers/store'
import queryString from 'query-string'
import { Form } from 'react-final-form'
import Loading from 'components/store/search/Loading'
import SearchForm from 'components/store/search/SearchForm'
import SearchResultList from 'components/store/search/SearchResultList'

class SearchContainer extends Component {
	onSubmit = async values => {
		const { history, changeLoading, getStoreList } = this.props
		changeLoading(true)
		try {
			history.push('/search/?' + queryString.stringify(values))
			await getStoreList(values)
		} catch (e) {
			console.log(e)
		}
		changeLoading(false)
	}

	async componentDidMount() {
		const { location, changeLoading, getStoreList } = this.props
		const query = queryString.parse(location.search)
		changeLoading(true)
		try {
			await getStoreList(query)
		} catch (e) {
			console.log(e)
		}
		changeLoading(false)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.storeList !== this.props.storeList
	// }

	render() {
		const { onSubmit } = this
		const { loading, location, parkList, cateList, storeList } = this.props
		const query = queryString.parse(location.search)

		return (
			<Fragment>
				<Form
					onSubmit={onSubmit}
					initialValues={query}
					values={query}
					render={props => (
						<SearchForm {...props} parkList={parkList} cateList={cateList} />
					)}
				/>
				{loading ? <Loading /> : <SearchResultList storeList={storeList} />}
			</Fragment>
		)
	}
}

export default connect(
	({ base, store }) => ({
		loading: store.loading,
		parkList: base.parkList,
		cateList: base.cateList,
		storeList: store.storeList,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(SearchContainer))
