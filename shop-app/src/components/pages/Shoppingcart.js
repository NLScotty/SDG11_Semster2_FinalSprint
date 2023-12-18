import React from 'react';
import CartDisplay from '../functional/CartDisplay';
import useLocalStorage from '../hooks/useLocalStorage';
import '../../ShoppingCart.css';
 
export const ShoppingCartProvider = () => {
    const [cartItems, setCartItems] = useLocalStorage("cart");
 
    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    };
 
    const updateQuantity = (itemId, quantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: quantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };
 
    const isEmpty = cartItems.length === 0;
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
 
    if(isEmpty){
        return(
            <p className='shopping-cart'>Your cart is empty</p>
        )
    }
    return(
        <CartDisplay 
            cart={cartItems} 
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity} 
            isEmpty={isEmpty} 
            total={total} 
        />
    );
};