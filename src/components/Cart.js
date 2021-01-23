import React from 'react';
import styled from 'styled-components';
//COMPONENTS
import CardInCart from './CardInCart';
import {connect} from 'react-redux';

import {deleteFromCart} from '../store/index';

const mapStateToProps = (state) => ({
	cartR: state.cartR,
});

const Cart = connect(mapStateToProps, {deleteFromCart})(
	({cartR, deleteFromCart}) => {
		return (
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
export default Cart;
