import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import styles from './Ballpark.scss'

class BallparkList extends Component {
	renderHomeTeam = () => {
		const { park } = this.props
		return park.homeTeam.map((team, i) => {
			return (
				<span key={'homeTeam' + i} className="mr-2">
					{team}
				</span>
			)
		})
	}

	render() {
		const { park } = this.props
		return (
			<Col lg="4" md="6">
				<Link to={'/search/?park=' + park._id} className={styles.link}>
					<Card body className="mb-3">
						<CardTitle className={['font-weight-bold', styles.cardTitle].join(' ')}>
							{park.name}
						</CardTitle>
						<CardSubtitle className="text-muted text-right">
							{park.location.name}
						</CardSubtitle>
						<img
							className="img-fluid mx-auto my-3"
							src="https://ballparkbiz.files.wordpress.com/2014/07/hanwha-eagles-logo.gif?w=360"
							width="150"
						/>
						<CardText className="text-primary">{this.renderHomeTeam()}</CardText>
					</Card>
				</Link>
			</Col>
		)
	}
}

export default BallparkList
