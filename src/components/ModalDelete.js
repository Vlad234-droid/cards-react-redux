import React from 'react';
import styled from 'styled-components';

const ModalDelete = ({
	setDisplay,
	display,
	backColor,
	cartR,
	name,
	deleteFromCart,
}) => {
	const exitCardHandler = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			setDisplay(!display);
		}
	};

	const closeDivHandler = () => {
		setDisplay(!display);
	};

	const deleteCardHandler = (name, cartR, deleteFromCart) => {
		const dataFilter = cartR.filter((item) => item.name !== name);
		const infoOfCard = dataFilter;
		// [{},{},{}]
		deleteFromCart(infoOfCard);
		setDisplay(!display);
	};

	return (
		<CardShadow className="shadow" onClick={exitCardHandler}>
			<Card style={{backgroundColor: backColor}}>
				<AddWrapper>
					<h2>Are you sure you want to delete this item ?</h2>
					<WrappBtnsChoose>
						<button
							onClick={() => deleteCardHandler(name, cartR, deleteFromCart)}
						>
							Ok
						</button>
						<button onClick={closeDivHandler}>Cancel</button>
					</WrappBtnsChoose>
				</AddWrapper>
			</Card>
		</CardShadow>
	);
};

const CardShadow = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.9);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 300;
`;

const Card = styled.div`
	text-align: center;
	width: 30%;
	height: 30%;
	border-radius: 1rem;
	padding: 1rem 1.5rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	box-shadow: 0px 15px 1500px rgba(255, 255, 255, 0.2);
	z-index: 100;
`;

const AddWrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0px;
`;

const WrappBtnsChoose = styled.div`
	padding: 0px 95px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;

	button {
		padding: 10px 15px;
		border-radius: 5px;
		font-size: 15px;
		font-weight: bold;
		border: none;
		outline: none;
		cursor: pointer;
	}
`;

export default ModalDelete;
