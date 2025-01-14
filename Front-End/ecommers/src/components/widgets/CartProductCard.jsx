import * as React from 'react';
import './cartProductCard.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice/CartSlice';

const CartProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div className="cart-cart-container">
            <div className="cart-product-card">
                <div className="cart-product-image">
                    <img src={product.image || "https://via.placeholder.com/80"} alt={product.name} />
                </div>
                <div className="cart-product-details">
                    <div className="cart-product-title">{product.name}</div>
                    <div className="cart-product-description">{product.description}</div>
                    <div className="cart-product-price">Price: ₹{product.price.toFixed(2)}</div>
                    <div className="quantity-controls">
                        <button className="cart-remove-button" onClick={handleRemoveClick}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;
