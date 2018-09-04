import React from 'react'
import Moment from 'moment'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import styles from './Review.scss'

const Review = ({ review }) => (
	<ListGroupItem action>
		<ListGroupItemHeading
			className={['d-flex justify-content-between', styles.reviewHeader].join(' ')}
		>
			<div className="font-weight-bold">{review.user.name}</div>
			<div className="text-muted">{Moment(review.created).format('YYYY-MM-DD HH:mm')}</div>
		</ListGroupItemHeading>
		<ListGroupItemText className="mb-0">
			{review.content.split('\n').map((line, i) => (
				<span key={i}>
					{line}
					<br />
				</span>
			))}
		</ListGroupItemText>
	</ListGroupItem>
)

export default Review
