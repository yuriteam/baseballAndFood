import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
	<footer className="footer bg-dark text-light py-lg-5 py-4">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 h-100 text-center text-lg-left my-auto">
					<ul className="list-inline mb-2">
						<li className="list-inline-item">
							<Link to="#">About</Link>
						</li>
						<li className="list-inline-item">&sdot;</li>
						<li className="list-inline-item">
							<Link to="#">Contact</Link>
						</li>
						<li className="list-inline-item">&sdot;</li>
						<li className="list-inline-item">
							<Link to="#">Terms of Use</Link>
						</li>
					</ul>
					<p className="text-muted small mb-4 mb-lg-0">
						&copy; 배불리 2018. All Rights Reserved.
					</p>
				</div>
				<div className="col-lg-6 h-100 text-center text-lg-right my-auto">
					<ul className="list-inline mb-0">
						<li className="list-inline-item mr-3">
							<a href="#">
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</a>
						</li>
						<li className="list-inline-item mr-3">
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} size="2x" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
