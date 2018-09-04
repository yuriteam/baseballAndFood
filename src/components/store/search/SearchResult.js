import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardSubtitle, CardTitle } from 'reactstrap'
import styles from './SearchResult.scss'

const SearchResult = ({ store }) => (
	<Col xs="12" className="mb-3">
		<Link to={'/store/' + store._id} className={styles.link}>
			<Card body>
				<CardTitle
					className={['d-flex justify-content-between', styles.cardTitle].join(' ')}
				>
					<div className="font-weight-bold text-primary">{store.name}</div>
					<div className="badge badge-secondary">{store.category.name}</div>
				</CardTitle>
				<CardSubtitle className="text-muted mb-3">{store.park.name}</CardSubtitle>
				<CardText className={styles.cardText}>{store.location.name}</CardText>
			</Card>
		</Link>
	</Col>
)

export default SearchResult
