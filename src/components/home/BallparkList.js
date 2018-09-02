import React from 'react'
import { Row } from 'reactstrap'
import BallPark from './Ballpark.js'

const BallparkList = ({ parks }) => {
	return (
		<Row>
			{parks.map((park, i) => (
				<BallPark key={'ballpark' + i} park={park} />
			))}
		</Row>
	)
}

export default BallparkList
