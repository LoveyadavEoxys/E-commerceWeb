import React from 'react';
import './OrderCard.css';

const SellerOrderCard = ({ order, role }) => {
 
 
    const itemsList = Array.isArray(order.items) ? order.items.join(', ') : 'No items available';

    return (
        <div className="order-card">
            <h2 className="order-id">Order ID: {order.orderId}</h2>
            <p className="order-date">
                Date: {new Date().toLocaleDateString()}
            </p>

            <p className="order-items">
                <strong>Numbers of Item:</strong> {order.totalProducts}
            </p>
            <p className="order-total">
                <strong>Total:</strong> ${order.totalProducts*order.totalAmount}
            </p>

        </div>
    );
};

export default SellerOrderCard;
