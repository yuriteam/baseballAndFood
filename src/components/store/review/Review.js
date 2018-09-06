import React from 'react'
import Moment from 'moment'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import styles from './Review.scss'

const Review = ({ review }) => {
	const score = review.score || 0
	return (
		<ListGroupItem action>
			<ListGroupItemHeading
				className={['d-flex justify-content-between', styles.reviewHeader].join(' ')}
			>
				<div className="font-weight-bold">
					<span className="mr-2">{review.user.name}</span>
					<span className="text-secondary font-weight-normal">
						{_.times(score, i => (
							<FontAwesomeIcon icon={faStar} key={i} />
						))}
						{_.times(5 - score, i => (
							<FontAwesomeIcon icon={faStarRegular} key={i} />
						))}
					</span>
				</div>
				<div className="text-muted">
					{Moment(review.created).format('YYYY-MM-DD HH:mm')}
				</div>
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
}

export default Review
