import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
import AddContext from '../contexts/AddContext';

const Product = (props) => {
	const product = useContext(ProductContext);
	const addItem = useContext(AddContext);
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => {addItem(props.product)}}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
