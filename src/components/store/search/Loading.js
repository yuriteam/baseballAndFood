import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'

const Loading = () => (
	<main className="container my-5 py-5 text-center">
		<FontAwesomeIcon icon={faSpinner} className="fa-spin" size="3x" />
	</main>
)

export default Loading
