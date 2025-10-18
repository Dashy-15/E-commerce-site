import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
    items: [],
    totalPrice: 0
}

const cartReducerFun = (state, action) => {
    if(action.type === "ADD") {
        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.quantity;
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if(existingItem) {
            const updatedExistingItem = {...existingItem, quantity: existingItem.quantity + action.item.quantity};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedExistingItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    if(action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if(existingItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        } else {
            const updatedExistingItem = {...existingItem, quantity: existingItem.quantity - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedExistingItem;
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    return defaultCart;
}

function CartProvider(props) {
    const addItemHandler = (item) => {
        cartDispatch({type: "ADD", item: item});
    }

    const removeItemHandler = (id) => {
        cartDispatch({type: "REMOVE", id: id});
    }

    const [cartState, cartDispatch] = useReducer(cartReducerFun, defaultCart);
    const cartContext = {
        totalPrice: cartState.totalPrice,
        items: cartState.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;