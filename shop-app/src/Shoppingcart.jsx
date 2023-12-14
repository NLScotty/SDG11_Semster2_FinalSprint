import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setTotal(total + product.price);
    };

    const removeFromCart = (productId) => {
        const newCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(newCartItems);
        setTotal(newCartItems.reduce((acc, item) => acc + item.price, 0));
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
