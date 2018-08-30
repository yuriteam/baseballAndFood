import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './PageTemplate.scss'

const PageTemplate = ({ children }) => {
	const mainClass = ['my-2 p-2 bg-white rounded', styles.container].join(' ')
	return (
		<div className="container my-4">
			<Header />
			<main className={mainClass}>{children}</main>
			<Footer />
		</div>
	)
}

export default PageTemplate
