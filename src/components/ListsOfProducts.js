import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDataR} from '../store/index';
import {setData} from '../store/index';

//COMPONENTS
import Card from './Card';
import Cart from './Cart';
import Header from './Header';
import LikedCards from './LikedCards';
import Modal from './Modal';

const mapStateToPRops = (state) => ({
	dataR: state.dataR,
	toggle: state.toggleModalOpen.toggle,
	fav: state.fav,
});

const ListsOfProducts = connect(mapStateToPRops, {
	getDataR,
	setData,
})(({dataR, getDataR, toggle, setData, fav}) => {
	const favouriteHandler = (dataR, url) => {
		const dataFilter = dataR.find((item) => item.url === url);
		const newState = [...dataR];
		for (let item of newState) {
			if (item.name === dataFilter.name) {
				item.favourite = !item.favourite;
			}
		}
		setData(newState);
	};

	useEffect(() => {
		getDataR();
	}, [getDataR]);

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<WrapperInfo>
						{dataR.length && (
							<ProductList>
								{dataR.map((item, i) => (
									<Card
										favourite={item.favourite}
										key={i}
										name={item.name}
										price={item.price}
										url={item.url}
										color={item.color}
										favouriteHandler={favouriteHandler}
									/>
								))}
							</ProductList>
						)}
					</WrapperInfo>
				</Route>

				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/like">
					<LikedCards favouriteHandler={favouriteHandler} />
				</Route>
			</Switch>
			{toggle && <Modal />}
		</>
	);
});

const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;
const WrapperInfo = styled.div`
	position: relative;
`;

export default ListsOfProducts;
