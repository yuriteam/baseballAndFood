import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Review from './Review'

const ReviewList = ({ reviewList }) => (
	<ListGroup className="mt-3">
		<ListGroupItem color="primary" className="font-weight-bold">
			리뷰
		</ListGroupItem>
		{reviewList.size !== 0 &&
			reviewList.map((review, i) => <Review key={'review_' + review._id} review={review} />)}
		{reviewList.size == 0 && <ListGroupItem>리뷰가 없습니다.</ListGroupItem>}
	</ListGroup>
)

export default ReviewList
