import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'

const Loading = () => (
	<div className="container my-5 py-2 text-center">
		<FontAwesomeIcon icon={faSpinner} className="fa-spin" size="3x" />
	</div>
)

export default Loading
