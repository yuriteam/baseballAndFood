import React from 'react'
import { Field } from 'react-final-form'
import { Row, Col, Form, Input, CustomInput, Button } from 'reactstrap'

const SearchForm = props => {
	const { parkList, handleSubmit, submitting } = props
	return (
		<section className="bg-primary text-white text-center">
			<div className="container py-md-4 pb-3">
				<Row>
					<Col xl="8" lg="9" md="11" className="mx-auto">
						<Form onSubmit={handleSubmit}>
							<div className="form-row">
								<Col md="4" className="mb-md-0 mb-2">
									<Field
										name="park"
										component="select"
										className="custom-select"
										onChange={handleSubmit}
									>
										{parkList.map((park, i) => (
											<option key={'park' + i} value={park._id}>
												{park.name}
											</option>
										))}
									</Field>
								</Col>
								<Col md="6" className="mb-md-0 mb-2">
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
