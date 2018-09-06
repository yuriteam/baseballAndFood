import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardTitle, CardSubtitle } from 'reactstrap'
import styles from './Ballpark.scss'

class Ballpark extends Component {
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
							className={['mx-auto my-3', styles.img].join(' ')}
							src={'/upload/' + park.image}
							width="150"
						/>
						<CardText className="text-primary">{this.renderHomeTeam()}</CardText>
					</Card>
				</Link>
			</Col>
		)
	}
}

export default Ballpark
