import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import OwnerContainer from 'containers/owner/OwnerContainer'

const OwnerPage = () => (
	<PageTemplate>
		<main className="container py-3">
			<OwnerContainer />
		</main>
	</PageTemplate>
)

export default OwnerPage
