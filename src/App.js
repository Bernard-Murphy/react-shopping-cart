import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import AddContext from './contexts/AddContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log(item);
		setCart([
			...cart,
			item
		])
	};


	return (
		<ProductContext.Provider value={products} >
		<CartContext.Provider value={cart}>
		<AddContext.Provider value={addItem}>
			<div className="App">
					<Navigation/>

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
		</AddContext.Provider>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
