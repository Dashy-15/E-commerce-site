import React from "react";

const CartContext = React.createContext({
    totalPrice: 0,
    items: [],
    addItem: () => {},
    removeItem: () => {}
})

export default CartContext;