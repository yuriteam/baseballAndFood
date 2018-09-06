import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardSubtitle, CardTitle } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import styles from './SearchResult.scss'

const SearchResult = ({ store }) => {
	let avg = Math.floor(store.avg) || 0
	let round =
		store.avg - Math.floor(store.avg) > 0.39 && store.avg - Math.floor(store.avg) < 0.6 ? 1 : 0
	return (
		<Col xs="12" className="mb-3">
			<Link to={'/store/' + store._id} className={styles.link}>
				<Card body>
					<CardTitle
						className={[
							'd-flex justify-content-between align-items-center',
							styles.cardTitle,
						].join(' ')}
					>
						<div className="font-weight-bold text-primary">
							<span className="mr-2">{store.name}</span>
							<span className="text-warning">
								{_.times(avg, i => (
									<FontAwesomeIcon icon={faStar} key={i} />
								))}
								{round === 1 && <FontAwesomeIcon icon={faStarHalfAlt} />}
								{_.times(5 - avg - round, i => (
									<FontAwesomeIcon icon={faStarRegular} key={i} />
								))}
							</span>
						</div>
						<div className={['badge badge-secondary', styles.fontSize].join(' ')}>
							{store.category.name}
						</div>
					</CardTitle>
					<CardSubtitle className="text-muted mb-3">{store.park.name}</CardSubtitle>
					<CardText className={styles.cardText}>{store.location.name}</CardText>
				</Card>
			</Link>
		</Col>
	)
}

export default SearchResult
