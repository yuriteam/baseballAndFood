import React from 'react'
import { Field } from 'react-final-form'
import { Alert, Form, Media, FormGroup, Col, Button } from 'reactstrap'
import styles from './OrderForm.scss'

const OrderForm = props => {
	const { store, menuList, handleSubmit, submitting, submitError } = props
	return (
		<Form onSubmit={handleSubmit}>
			<h5 className="font-weight-bold mb-3">[{store.name}] 배달 신청</h5>
			<Field name="store" component="input" type="hidden" />
			{submitError && (
				<Alert color="danger" className="small my-2">
					{submitError}
				</Alert>
			)}
			<FormGroup row className="mb-0">
				{menuList.map((menu, i) => (
					<Col key={'menu_' + menu._id} xs="12" md="6" lg="4" className="mb-3">
						<Media className="align-items-center">
							<Media left>
								<Media
									object
									src="https://placeholdit.imgix.net/~text?txt=100%C3%97100&w=100&h=100"
									className="img-thumbnail"
								/>
							</Media>
							<Media body className={['ml-3', styles.mediaText].join(' ')}>
								{menu.name}
								<Field
									name="menus"
									component="input"
									type="checkbox"
									value={menu._id}
								/>
							</Media>
						</Media>
					</Col>
				))}
			</FormGroup>
			<Button color="primary" type="submit" block disabled={submitting}>
				주문
			</Button>
		</Form>
	)
}

export default OrderForm
