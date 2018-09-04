import React, { Fragment } from 'react'
import { Card, CardHeader, CardFooter, CardBody, CardSubtitle, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faMapMarkerAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import auth from 'utils/auth'
import styles from './SearchDetail.scss'

const SearchDetail = ({ store, toggle }) => (
	<Fragment>
		{/* 지도 */}
		<Card>
			<CardHeader className="bg-light">
				<h3 className="font-weight-bold card-title mb-4 text-primary">{store.name}</h3>
				<CardSubtitle>{store.location.name}</CardSubtitle>
			</CardHeader>
			<CardBody>
				<ul className={['m-0 p-0', styles.ul].join(' ')}>
					<li className="mb-3">
						<FontAwesomeIcon icon={faTag} size="lg" className="text-primary mr-2" />
						{store.category.name}
					</li>
					<li className="mb-3">
						<FontAwesomeIcon
							icon={faMapMarkerAlt}
							size="lg"
							className="text-primary mr-2"
						/>
						{store.park.name}
					</li>
					<li>
						<FontAwesomeIcon
							icon={faPhoneSquare}
							size="lg"
							className="text-primary mr-2"
						/>
						{store.phoneNumber}
					</li>
				</ul>
			</CardBody>
			<CardBody>메뉴는 여기</CardBody>
			{auth.getToken() !== null && (
				<CardFooter className="text-right">
					<Button color="primary" onClick={toggle}>
						리뷰 등록
					</Button>
				</CardFooter>
			)}
		</Card>
	</Fragment>
)

export default SearchDetail