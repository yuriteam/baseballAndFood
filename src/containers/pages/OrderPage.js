import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import OrderContainer from 'containers/store/order/OrderContainer'

const OwnerPage = () => (
	<PageTemplate>
		<main className="container py-3">
			<OrderContainer />
		</main>
	</PageTemplate>
)

export default OwnerPage
