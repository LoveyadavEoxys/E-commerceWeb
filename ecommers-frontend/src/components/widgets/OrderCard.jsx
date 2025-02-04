import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order, role }) => {

    const itemsList = Array.isArray(order.items) ? order.items.join(', ') : 'No items available';

    return (
        <div className="order-card">
            <h2 className="order-id">Order ID: {order.id}</h2>
            <p className="order-date">
                Date: {new Date().toLocaleDateString()}
            </p>

            <p className="order-items">
                <strong>Items:</strong> {order.name}
            </p>
            <p className="order-total">
                <strong>Total:</strong> ${order.price}
            </p>

        </div>
    );
};

export default OrderCard;
