import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
	Row,
	Col,
	Alert,
	Card,
	CardHeader,
	CardFooter,
	CardBody,
	CardSubtitle,
	Button,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTag,
	faMapMarkerAlt,
	faPhoneSquare,
	faStar,
	faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import auth from 'utils/auth'
import MenuList from './MenuList'
import StoreMap from './StoreMap'
import styles from './SearchDetail.scss'

const SearchDetail = ({ store, menuList, toggle }) => {
	let avg = Math.floor(store.avg) || 0
	let round =
		store.avg - Math.floor(store.avg) > 0.39 && store.avg - Math.floor(store.avg) < 0.6 ? 1 : 0
	return (
		<Fragment>
			<StoreMap location={store.location} />
			<Card>
				<CardHeader className="bg-light">
					<h3 className="font-weight-bold card-title mb-4 text-primary">
						<span className="mr-2">{store.name}</span>
						<span className="text-warning small mr-2">{store.avg.toFixed(1)}</span>
						<span className="text-warning small">
							{_.times(avg, i => (
								<FontAwesomeIcon icon={faStar} key={i} />
							))}
							{round === 1 && <FontAwesomeIcon icon={faStarHalfAlt} />}
							{_.times(5 - avg - round, i => (
								<FontAwesomeIcon icon={faStarRegular} key={i} />
							))}
						</span>
					</h3>
					<CardSubtitle>{store.location.name}</CardSubtitle>
				</CardHeader>
				<CardBody>
					{store.image && (
						<Row>
							<Col xs="12" md="9" className="mx-auto mb-3">
								<img
									src={'/upload/' + store.image}
									className="rounded img-thumbnail w-100"
								/>
							</Col>
						</Row>
					)}
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
						{store.orderable && (
							<Alert color="info" fade={false} className="mt-4 mb-0" tag="h5">
								이 매장의 배달 위치는
								<span className="ml-2 font-weight-bold">
									{store.destination || '미정'}
								</span>{' '}
								입니다.
							</Alert>
						)}
						{!store.orderable && (
							<Alert color="warning" fade={false} className="mt-4 mb-0" tag="h5">
								이 매장은 배달이 불가능합니다.
							</Alert>
						)}
					</ul>
				</CardBody>
				<CardBody>
					<MenuList menuList={menuList} />
				</CardBody>
				{auth.getToken() !== null &&
					!auth.getUserInfo().isOwner &&
					menuList.size !== 0 &&
					store.orderable && (
						<CardFooter className="d-flex justify-content-between">
							<Link to={'/store/' + store._id + '/order'} className="btn btn-primary">
								배달 신청
							</Link>
							{store.reviewable && (
								<Button color="primary" onClick={toggle}>
									리뷰 등록
								</Button>
							)}
						</CardFooter>
					)}
			</Card>
		</Fragment>
	)
}

export default SearchDetail
