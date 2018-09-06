import React, { Fragment } from 'react'
import BaseContainer from 'containers/common/BaseContainer'
import Header from './Header'
import Footer from './Footer'

const PageTemplate = ({ children }) => (
	<Fragment>
		<BaseContainer />
		<Header />
		<section id="main">{children}</section>
		<Footer />
	</Fragment>
)

export default PageTemplate
