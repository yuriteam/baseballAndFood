import React, { Component } from 'react'
import styles from './Ballpark.scss'

export default class BallparkList extends Component {
	renderHomeTeam = () => {
		return this.props.data.homeTeam.map((team, i) => {
			return <span key={'team' + i}>{team} </span>
		})
	}

	render() {
		return (
			<div className={styles.ballparkCard}>
				<a className={styles.ballparkLink}>
					<h3 className={styles.ballparkName}>{this.props.data.name}</h3>
					<h4 className={styles.ballparkLocation}>{this.props.data.location}</h4>
					<img
						className={styles.ballparkImg}
						src="https://ballparkbiz.files.wordpress.com/2014/07/hanwha-eagles-logo.gif?w=360"
						width="150"
					/>
					{this.renderHomeTeam()}
				</a>
			</div>
		)
	}
}
