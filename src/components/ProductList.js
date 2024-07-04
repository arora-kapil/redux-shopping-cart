import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
];

const ProductList = () => {
    const dispatch = useDispatch();

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
