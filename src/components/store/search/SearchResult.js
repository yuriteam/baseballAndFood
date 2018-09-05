import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardSubtitle, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import styles from './SearchResult.scss'

const SearchResult = ({ store }) => (
	<Col xs="12" className="mb-3">
		<Link to={'/store/' + store._id} className={styles.link}>
			<Card body>
				<CardTitle
					className={['d-flex justify-content-between', styles.cardTitle].join(' ')}
				>
					<div className="font-weight-bold text-primary">
						<span className="mr-2">{store.name}</span>
						<span className="text-warning">
							{store.avg &&
								_.times(store.avg, i => <FontAwesomeIcon icon={faStar} key={i} />)}
							{store.avg &&
								_.times(5 - store.avg, i => (
									<FontAwesomeIcon icon={faStarRegular} key={i} />
								))}
							{!store.avg &&
								_.times(5, i => <FontAwesomeIcon icon={faStarRegular} key={i} />)}
						</span>
					</div>
					<div className="badge badge-secondary">{store.category.name}</div>
				</CardTitle>
				<CardSubtitle className="text-muted mb-3">{store.park.name}</CardSubtitle>
				<CardText className={styles.cardText}>{store.location.name}</CardText>
			</Card>
		</Link>
	</Col>
)

export default SearchResult
