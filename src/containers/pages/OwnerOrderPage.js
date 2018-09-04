import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import OwnerOrderContainer from 'containers/owner/OwnerOrderContainer'

const OwnerOrderPage = () => (
	<PageTemplate>
		<main className="container py-3">
			<OwnerOrderContainer />
		</main>
	</PageTemplate>
)

export default OwnerOrderPage
