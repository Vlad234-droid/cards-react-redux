import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
//actions
import {addToCart} from '../store/index';
import {setModal} from '../store/index';

const mapStateToProps = (state) => ({
	dataR: state.dataR,
	toggle: state.toggleModalOpen.toggle,
	name: state.toggleModalOpen.name,
});

const Modal = connect(mapStateToProps, {
	addToCart,
	setModal,
})(({dataR, setModal, name, addToCart}) => {
	const exitCardHandler = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			setModal();
		}
	};

	const closeDivHandler = () => {
		setModal();
	};

	const addToCartHandler = (dataR, name) => {
		const dataFilter = dataR.filter((item) => item.name === name);
		const infoOfCard = dataFilter;
		addToCart(...infoOfCard);
		setModal();
	};

	return (
		<CardShadow className="shadow" onClick={exitCardHandler}>
			<Card style={{backgroundColor: 'white'}}>
				<AddWrapper>
					<h2>Are you sure you want to add this pruduct to cart ?</h2>
					<WrappBtnsChoose>
						<button onClick={() => addToCartHandler(dataR, name)}>Ok</button>
						<button onClick={closeDivHandler}>Cancel</button>
					</WrappBtnsChoose>
				</AddWrapper>
			</Card>
		</CardShadow>
	);
});

const CardShadow = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
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
	box-shadow: 7px 15px 100px 2px rgba(255, 255, 255, 0.1);
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

export default Modal;
