import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css'
const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className='cart-parent'>
            {cart.length === 0 ? (
                <><p className='empty-cart'>Your cart is empty. 😐</p>
                    <p className='empty-cart'>Add some products in your cart and they will appear here. 😀</p></>
            ) :
                <div className="cart-products-container">
                    <div className='cart-products'>
                        {cart.map(product => (
                            <div className="mycard" key={Math.random() * 2000} style={{ "width": "15rem", "overflow": "hidden" }}>
                                <img className='card-img' src={product.image} alt={product.name} />
                                <div className="mycard-body">
                                    <p className="card-title">{product.name}</p>
                                    <p className="card-text">₹{product.price} </p>
                                    <button onClick={() => removeFromCart(product._id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {cart.length !== 0 && <div className="btn-container">
                <button className='btn btn-danger p-3 m-3' onClick={clearCart}>Clear Cart X</button>
                <button className='btn btn-primary p-3 m-3' onClick={() => { alert("Your Order Was Placed Successfullt"); clearCart() }}>Buy Now ✔</button>
            </div>}
        </div>
    );
};

export default Cart;
