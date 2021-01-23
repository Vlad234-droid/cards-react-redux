import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const SET_DATA = 'SET_DATA';
const SET_MODAL = 'SET_MODAL';
const ADD_TO_CART = 'FAV_TO_CART';
const DELETE_CARD_FROMCART = 'DELETE_CARD_FROMCART';
const SET_FAVORITE = 'SET_FAVORITE';

const initialState = {
	dataR: [],
	toggleModalOpen: {
		toggle: false,
		name: '',
	},
	cartR: [],
	fav: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				dataR: action.payload,
			};

		case SET_MODAL:
			return {
				...state,
				toggleModalOpen: {
					toggle: !state.toggleModalOpen.toggle,
					name: action.payload,
				},
			};

		case ADD_TO_CART:
			return {
				...state,
				cartR: [...state.cartR, action.payload],
			};

		case DELETE_CARD_FROMCART:
			return {
				...state,
				cartR: action.payload,
			};
		case SET_FAVORITE:
			return {
				...state,
				fav: action.payload,
			};
		default:
			return state;
	}
}

export const setData = (payload) => ({
	type: SET_DATA,
	payload,
});
export const setFavorite = (payload) => ({
	type: SET_FAVORITE,
	payload,
});

export const setModal = (payload) => ({
	type: SET_MODAL,
	payload,
});

export const addToCart = (payload) => ({
	type: ADD_TO_CART,
	payload,
});
export const deleteFromCart = (payload) => ({
	type: DELETE_CARD_FROMCART,
	payload,
});

export const getDataR = () => async (dispatch) => {
	const res = await fetch('./products.json');
	const data = await res.json();
	const dataFetch = data.products;
	dispatch(setData(dataFetch));
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
