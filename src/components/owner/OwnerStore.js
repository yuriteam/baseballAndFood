import React, { Component } from 'react'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap'
import styles from './OwnerStore.scss'
export default class OwnerStore extends Component {
	render() {
		return (
			<ListGroupItem className={styles.storeWrapper}>
				<div className={styles.storeImg}>
					<img
						className="img-fluid mx-auto my-3"
						src={this.props.info.imgUri}
						width="150"
					/>
				</div>
				<div className={styles.desc}>
					<ListGroupItemHeading>{this.props.info.storeName}</ListGroupItemHeading>
					<ListGroupItemText>{this.props.info.ballpark}</ListGroupItemText>
					<Button className={styles.menuButton}>메뉴관리</Button>
				</div>
			</ListGroupItem>
		)
	}
}
