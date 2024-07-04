import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../redux/actions';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(adjustQuantity(id, quantity));
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <p>
                            Quantity:
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleQuantityChange(item.id, Number(e.target.value))
                                }
                                min="1"
                            />
                        </p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                ))
            )}
            <h3>
                Total: $
                {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </h3>
        </div>
    );
};

export default Cart;
