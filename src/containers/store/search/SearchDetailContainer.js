import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'reducers/store'
import queryString from 'query-string'
import { Form } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import Loading from 'components/store/search/Loading'
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
			const { message } = e.response.data
			return { [FORM_ERROR]: message }
		}
	}

	toggleModal = () => {
		const { toggleReviewModal } = this.props
		toggleReviewModal()
	}

	async componentDidMount() {
		const { match, changeLoading, getStoreDetail } = this.props
		changeLoading(true)
		try {
			await getStoreDetail(match.params)
		} catch (e) {
			console.log(e)
		}
		changeLoading(false)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.storeDetail.reviewList !== this.props.storeDetail.reviewList
	// }

	render() {
		const { onSearchSubmit, onReviewSubmit, toggleModal } = this
		const { loading, storeDetail, cateList, parkList } = this.props
		const { store, menuList, reviewList, reviewModal } = storeDetail
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
				{loading ? (
					<Loading />
				) : (
					<main className="container py-3">
						{store && (
							<Fragment>
								<SearchDetail
									store={store}
									menuList={menuList}
									toggle={toggleModal}
								/>
								{store.orderable && (
									<Fragment>
										<ReviewList reviewList={reviewList} />
										<Form
											onSubmit={onReviewSubmit}
											initialValues={{ store: store._id }}
											render={props => (
												<ReviewForm
													{...props}
													isOpen={reviewModal}
													toggle={() => {
														props.form.reset()
														toggleModal()
													}}
												/>
											)}
										/>
									</Fragment>
								)}
							</Fragment>
						)}
					</main>
				)}
			</Fragment>
		)
	}
}

export default connect(
	({ base, store }) => ({
		loading: store.loading,
		parkList: base.parkList,
		cateList: base.cateList,
		storeDetail: store.storeDetail,
	}),
	dispatch => bindActionCreators(storeActions, dispatch)
)(withRouter(SearchDetailContainer))
