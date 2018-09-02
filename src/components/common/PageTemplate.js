import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

const PageTemplate = ({ children }) => (
	<Fragment>
		<Header />
		{children}
		<Footer />
	</Fragment>
)

export default PageTemplate
