import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order, role }) => {
    const itemsList = Array.isArray(order.items) ? order.items.join(', ') : 'No items available';
    //  console.log(order);
    if (role === 'customer') {
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
                    <strong>Product Name :</strong> {order.orderItems[0].productName}
                </p>
                <p className="order-total">
                    <strong>Total:</strong>  ₹{order.totalProducts * order.totalAmount}
                </p>
            </div>
        );
    } else {
        return (
            <div className="order-card">
                <h2 className="order-id">Order ID: {order.orderId}</h2>
                <p className="order-date">
                    Date: {new Date().toLocaleDateString()}
                </p>
                <p className="order-items">
                    <strong>User ID :</strong> {order.userId}
                </p>
                <p className="order-total">
                    <strong>Amount:</strong> ${order.totalAmount }
                </p>
               
            </div>
        );
    }
};

export default OrderCard;
// Electronics
// Smartphones
// Clothing
// Furniture
// Books
// Toys