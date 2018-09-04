import React, { Component } from 'react'
import OwnerStore from './OwnerStore'
import { ListGroup, Button } from 'reactstrap'

const tempData = [
	{
		key: 'a',
		storeName: '잠실스타벅스',
		tags: [],
		ballpark: '잠실야구장',
		imgUri: 'http://blogfiles.naver.net/20140205_176/gamnamuzip_13915710096842bPrP_JPEG/37.jpg',
	},
	{
		key: 'b',
		storeName: '수원스타벅스',
		tags: [],
		ballpark: '수원 kt 위즈파크',
		imgUri: 'http://blogfiles.naver.net/20140205_176/gamnamuzip_13915710096842bPrP_JPEG/37.jpg',
	},
]

export default class OwnerStoreList extends Component {
	render() {
		return (
			<div>
				<ListGroup>
					{this.props.storeList.map((info, i) => {
						return <OwnerStore key={'owner_store' + i} info={info} />
					})}
				</ListGroup>
				<Button
					color="primary"
					block
					onClick={() => {
						this.props.toggleModal()
					}}
				>
					매장 추가
				</Button>
			</div>
		)
	}
}
