export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADJUST_QUANITIY = 'ADJUST_QUANITIY';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
});

export const adjustQuantity = (id, quantity) => ({
    type: ADJUST_QUANITIY,
    payload: { id, quantity }
});