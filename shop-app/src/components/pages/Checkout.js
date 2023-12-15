import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Adjust the path as necessary

const Checkout = () => {
    const [cartItems, setCartItems] = useLocalStorage("cart");
    const [formData, setFormData] = useState({ name: '', address: '', creditCard: '' });
 
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, handle the checkout process
        console.log('Checkout data:', formData);
        console.log('Cart Items:', cartItems);
 
        // Clear the cart after successful checkout
        setCartItems([]);
        alert("Checkout successful!"); // Replace with a more sophisticated confirmation message or UI
    };
 
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    };
 
    return (
<div className="checkout">
<h2>Checkout</h2>
<form onSubmit={handleSubmit}>
                {/* Form Fields */}
<input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
<input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
<input type="text" name="creditCard" placeholder="Credit Card Number" value={formData.creditCard} onChange={handleInputChange} required />
 
                <button type="submit">Submit Order</button>
</form>
 
            <div className="order-summary">
<h3>Order Summary</h3>
                {cartItems.map((item, index) => (
<div key={index}>
<p>{item.name} - ${item.price} * {item.qty} = ${item.price * item.qty}</p>
</div>
                ))}
<p>Total Amount: ${calculateTotal()}</p>
</div>
</div>
    );
};
 
export default Checkout;