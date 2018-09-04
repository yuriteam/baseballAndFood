import React from 'react'
import { Field } from 'react-final-form'
import { Row, Col, Form, Button } from 'reactstrap'

const SearchForm = props => {
	const { parkList, cateList, handleSubmit, submitting } = props
	return (
		<section className="bg-primary text-white text-center">
			<div className="container py-md-4 pb-3">
				<Row>
					<Col xl="8" lg="9" md="11" className="mx-auto">
						<Form onSubmit={handleSubmit}>
							<div className="form-row">
								<Col xs="9" md="4" className="mb-md-0 mb-2">
									<Field name="park" component="select" className="custom-select">
										{parkList.map((park, i) => (
											<option key={'park_' + park._id} value={park._id}>
												{park.name}
											</option>
										))}
									</Field>
								</Col>
								<Col xs="3" md="2" className="mb-md-0 mb-2">
									<Field name="cate" component="select" className="custom-select">
										<option value="">선택</option>
										{cateList.map((cate, i) => (
											<option key={'cate_' + cate._id} value={cate._id}>
												{cate.name}
											</option>
										))}
									</Field>
								</Col>
								<Col md="4" className="mb-md-0 mb-2">
									<Field
										name="name"
										component="input"
										placeholder="상점 이름"
										className="form-control"
									/>
								</Col>
								<Col md="2">
									<Button
										color="secondary"
										block
										type="submit"
										disabled={submitting}
									>
										검색
									</Button>
								</Col>
							</div>
						</Form>
					</Col>
				</Row>
			</div>
		</section>
	)
}

export default SearchForm
