import React from 'react';
import styled from 'styled-components';
//CIONS
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';

const Card = ({name, price, url, dataR, favourite, favouriteHandler}) => {
	return (
		<>
			<StyledCard>
				<WrapperInfo>
					<IconButton>
						<ShoppingBasketIcon fontSize="large" color="secondary" />
					</IconButton>
					<h2>{name}</h2>
					<p>{`${price}$`}</p>
					<IconButton onClick={() => favouriteHandler(dataR, url)}>
						<GradeIcon
							fontSize="small"
							style={{color: `${favourite ? 'red' : 'black'}`}}
						/>
					</IconButton>
				</WrapperInfo>
				<img src={url} alt={name} />
			</StyledCard>
		</>
	);
};

const StyledCard = styled.div`
	height: 45vh;
	box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		cursor: pointer;
	}
`;

const WrapperInfo = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Card;
