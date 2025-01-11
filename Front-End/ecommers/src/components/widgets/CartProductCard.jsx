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
        <div className="cart-container">
            <div className="product-card">
                <div className="product-image">
                    <img src={product.image || "https://via.placeholder.com/80"} alt={product.name} />
                </div>
                <div className="product-details">
                    <div className="product-title">{product.name}</div>
                    <div className="product-description">{product.description}</div>
                    <div className="product-price">Price: ${product.price.toFixed(2)}</div>
                    <div className="quantity-controls">
                        <button className="remove-button" onClick={handleRemoveClick}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;
