import React from 'react'
import { Row } from 'reactstrap'
import BallPark from './Ballpark'

const BallparkList = ({ parkList }) => (
	<Row>
		{parkList.map((park, i) => (
			<BallPark key={'ballpark_' + park._id} park={park} />
		))}
	</Row>
)

export default BallparkList
