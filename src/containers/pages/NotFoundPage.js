import React from 'react'
import { Alert } from 'reactstrap'
import PageTemplate from 'components/common/PageTemplate'

const NotFoundPage = () => (
	<PageTemplate>
		<Alert color="danger" fade={false}>
			페이지가 없습니다.
		</Alert>
	</PageTemplate>
)

export default NotFoundPage
