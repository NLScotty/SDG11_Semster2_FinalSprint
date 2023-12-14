import React, { useState } from 'react';
import CartDisplay from '../functional/CartDisplay';

export const ShoppingCartProvider = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart" || "[]")));
    console.log(cartItems)
    //function that allows one to remove item from cart, invoking setCartItems
    return(
        <CartDisplay cart={cartItems}></CartDisplay>
    );
};
