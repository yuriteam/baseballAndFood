import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'reducers/store'
import queryString from 'query-string'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import SearchForm from 'components/store/search/SearchForm'
import SearchDetail from 'components/store/search/SearchDetail'
import ReviewList from 'components/store/review/ReviewList'
import ReviewForm from 'components/store/review/ReviewForm'

class SearchDetailContainer extends Component {
	onSearchSubmit = async values => {
		const { history } = this.props
		// storeList 비워야 함
		history.push('/search/?' + queryString.stringify(values))
	}

	onReviewSubmit = async values => {
		const { insertReview, toggleReviewModal } = this.props
		try {
			await insertReview(values)
			toggleReviewModal()
		} catch (e) {
			return { [FORM_ERROR]: e.message }
		}
	}

	toggleModal = () => {
		const { toggleReviewModal } = this.props
		toggleReviewModal()
	}

	async componentDidMount() {
		const { match, parkList, cateList, getParkList, getCateList, getStoreDetail } = this.props

		try {
			if (!parkList || parkList.length == 0) {
				await getParkList()
			}
			if (!cateList || cateList.length == 0) {
				await getCateList()
			}
			await getStoreDetail(match.params)
		} catch (e) {
			console.log(e)
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.storeDetail.reviewList !== this.props.storeDetail.reviewList
	// }

	render() {
		const { onSearchSubmit, onReviewSubmit, toggleModal } = this
		const { storeDetail, cateList, parkList } = this.props
		const { store, reviewList, reviewModal } = storeDetail
		const query = store != null ? { park: store.park._id } : null

		return (
			<Fragment>
				<Form
					onSubmit={onSearchSubmit}
					initialValues={query}
					values={query}
					render={props => (
						<SearchForm {...props} parkList={parkList} cateList={cateList} />
					)}
				/>
				<main className="container py-3">
					{store && <SearchDetail store={store} toggle={toggleModal} />}
					<ReviewList reviewList={reviewList} />
					{store && (
						<Form
							onSubmit={onReviewSubmit}
							initialValues={{ store: store._id }}
							// values={query}
							render={props => (
								<ReviewForm
									{...props}
									reviewModal={reviewModal}
									toggle={toggleModal}
								/>
							)}
						/>
					)}
				</main>
			</Fragment>
		)
	}
}

export default connect(
	({ store }) => ({
		parkList: store.parkList,
		cateList: store.cateList,
		storeDetail: store.storeDetail,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(SearchDetailContainer))
