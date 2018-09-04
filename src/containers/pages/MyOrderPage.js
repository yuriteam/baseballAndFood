import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MyOrderContainer from 'containers/user/MyOrderContainer'

const MyOrderPage = () => (
	<PageTemplate>
		<main className="container py-3">
			<MyOrderContainer />
		</main>
	</PageTemplate>
)

export default MyOrderPage
