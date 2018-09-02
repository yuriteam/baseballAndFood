import React from 'react'
import { Alert } from 'reactstrap'
import PageTemplate from 'components/common/PageTemplate'

const NotFoundPage = () => (
	<PageTemplate>
		<main className="container py-3">
			<Alert color="danger" fade={false}>
				페이지가 없습니다.
			</Alert>
		</main>
	</PageTemplate>
)

export default NotFoundPage
