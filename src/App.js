import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

//COMPONENTS
import GlobalStyles from './components/GlobalStyles';
import ListsOfProducts from './components/ListsOfProducts';
import store from './store/index';
import {Provider} from 'react-redux';
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="App">
					<GlobalStyles />
					<ListsOfProducts />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
