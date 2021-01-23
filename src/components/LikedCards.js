import React, {useEffect} from 'react';
import styled from 'styled-components';
//components
import LikedCard from './LikedCard';
import {connect} from 'react-redux';
//actions
import {setFavorite} from '../store/index';

const mapStateToProps = (state) => ({
	dataR: state.dataR,
	fav: state.fav,
});

const LikedCards = connect(mapStateToProps, {setFavorite})(
	({dataR, favouriteHandler, fav, setFavorite}) => {
		useEffect(() => {
			const newArrToShow = [];
			const checkedFav = () => {
				for (let item of dataR) {
					if (item.favourite) {
						newArrToShow.push(item);
					}
				}
				setFavorite(newArrToShow);
			};
			checkedFav();
		}, [dataR, setFavorite]);

		return (
			<WrapperInfo>
				{fav.length !== 'undefined' ? (
					<ProductList>
						{fav.map((item, i) => (
							<LikedCard
								favourite={item.favourite}
								key={i}
								name={item.name}
								price={item.price}
								url={item.url}
								color={item.color}
								dataR={dataR}
								favouriteHandler={favouriteHandler}
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
const WrapperInfo = styled.div`
	position: relative;
`;
const ProductList = styled.div`
	width: 95%;
	margin: 50px auto 0px auto;
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
`;

export default LikedCards;
