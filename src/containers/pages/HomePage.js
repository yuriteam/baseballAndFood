import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import BallparkListContainer from 'containers/home/BallparkListContainer'

const HomePage = () => (
	<PageTemplate>
		<main className="container py-3">
			<BallparkListContainer />
		</main>
	</PageTemplate>
)

export default HomePage
