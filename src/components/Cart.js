import React, {useState} from 'react';
import styled from 'styled-components';

//COMPONENTS
import CardInCart from './CardInCart';
import {connect} from 'react-redux';
//Actions
import {submittedDataAction} from '../store/index';
import {deleteFromCart} from '../store/index';
import {toggleChekoutAction} from '../store/index';

//FORMI
import {Field, Form, Formik} from 'formik';

//stylkes
import '../App.css';
//MATERIAL
import {FormGroup, TextField, Typography, Box} from '@material-ui/core';

//YUP

import {object, string, number} from 'yup';

const mapStateToProps = (state) => ({
	cartR: state.cartR,
	toggle: state.toggleChekout.toggle,
	submittedData: state.submittedData,
});

const initialValues = {
	firstName: '',
	lastName: '',
	age: '',
	adress: '',
	phone: '',
};

const Cart = connect(mapStateToProps, {
	deleteFromCart,
	toggleChekoutAction,
	submittedDataAction,
})(
	({
		cartR,
		deleteFromCart,
		toggleChekoutAction,
		toggle,
		submittedData,
		submittedDataAction,
	}) => {
		const [submitCheckout, setsubmitCheckout] = useState(false);
		console.log(submittedData);
		return (
			<div className={`App ${toggle ? 'toggleLeft' : ''}`}>
				<WrapperInfo>
					{cartR.length ? (
						<ProductList>
							{cartR.map((item, i) => (
								<CardInCart
									key={i}
									name={item.name}
									price={item.price}
									url={item.url}
									color={item.color}
									cartR={cartR}
									deleteFromCart={deleteFromCart}
								/>
							))}
						</ProductList>
					) : (
						''
					)}
				</WrapperInfo>
				<ConainerChekout>
					<button onClick={toggleChekoutAction}>Chekout</button>
				</ConainerChekout>

				<div className={`checkOutBox ${toggle ? 'active-checkOutBox' : ''}`}>
					{submitCheckout && (
						<Box marginBottom={2}>
							<Typography variant="h5">Your Form is Submitted</Typography>
						</Box>
					)}
					<Typography variant="h4">Info</Typography>
					<Formik
						validationSchema={object({
							firstName: string().required().min(2).max(10),
							lastName: string().required().min(2).max(10),
							age: number().required().min(10).max(120),
							adress: string().required().min(5).max(10),
							phone: string().required().min(2).max(10),
						})}
						initialValues={initialValues}
						onSubmit={(values) => {
							return new Promise(() => {
								setTimeout(() => {
									setsubmitCheckout(!submitCheckout);
									submittedDataAction(values);
									console.log(cartR);
								}, 3000);
							});
						}}
					>
						{({values, errors, touched, isSubmitting}) => (
							<Form>
								<Box marginBottom={1}>
									<FormGroup>
										{touched.firstName && errors.firstName
											? errors.firstName
											: null}
										<Field name="firstName" as={TextField} label="Full name" />
									</FormGroup>
								</Box>
								<Box marginBottom={1}>
									<FormGroup>
										{touched.lastName && errors.lastName
											? errors.lastName
											: null}
										<Field name="lastName" as={TextField} label="Last name" />
									</FormGroup>
								</Box>
								<Box marginBottom={1}>
									<FormGroup>
										{touched.age && errors.age ? errors.age : null}
										<Field
											name="age"
											type="number"
											as={TextField}
											label="Age"
										/>
									</FormGroup>
								</Box>
								<Box marginBottom={1}>
									<FormGroup>
										{touched.adress && errors.adress ? errors.adress : null}

										<Field
											name="adress"
											as="textarea"
											multiline
											rows={3}
											as={TextField}
											label="Adress"
										/>
									</FormGroup>
								</Box>
								<Box marginBottom={1}>
									<FormGroup>
										{touched.phone && errors.phone ? errors.phone : null}

										<Field
											name="phone"
											type="number"
											as={TextField}
											label="Phone"
										/>
									</FormGroup>
								</Box>
								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>

								<pre>{JSON.stringify(values, null, 4)}</pre>
								<pre>{JSON.stringify(errors, null, 4)}</pre>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		);
	}
);

const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;
const WrapperInfo = styled.div`
	position: relative;
`;

const ConainerChekout = styled.div`
	position: absolute;
	top: 2%;
	right: 1%;
	transform: translateX(-1%);
	button {
		border: none;
		outline: none;
		padding: 10px 15px;
		background-color: black;
		border-radius: 9px;
		box-shadow: -2px -2px 30px 5px red, 3px 3px 30px 5px blue;
		transition: all 0.5s ease;
		color: white;
	}
`;
export default Cart;
