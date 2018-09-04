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
		const { history, getStoreList } = this.props
		try {
			history.push('/search/?' + queryString.stringify(values))
			await getStoreList(values)
		} catch (e) {
			console.log(e)
		}
	}

	async componentDidMount() {
		const { location, parkList, cateList, getParkList, getCateList, getStoreList } = this.props
		const query = queryString.parse(location.search)

		try {
			if (!parkList || parkList.length == 0) {
				await getParkList()
			}
			if (!cateList || cateList.length == 0) {
				await getCateList()
			}
			await getStoreList(query)
		} catch (e) {
			console.log(e)
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.storeList !== this.props.storeList
	}

	render() {
		const { onSubmit } = this
		const { location, parkList, cateList, storeList } = this.props
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
				<SearchResultList storeList={storeList} />
			</Fragment>
		)
	}
}

export default connect(
	({ store }) => ({
		parkList: store.parkList,
		cateList: store.cateList,
		storeList: store.storeList,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(SearchContainer))
