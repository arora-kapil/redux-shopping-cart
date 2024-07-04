import { ADD_TO_CART, ADJUST_QUANITIY, REMOVE_FROM_CART } from "./actions";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        case ADJUST_QUANITIY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };
        default:
            return state;
    }
}

export default cartReducer;