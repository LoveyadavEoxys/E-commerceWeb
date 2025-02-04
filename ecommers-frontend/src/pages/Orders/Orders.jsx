import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/layout/Navbar';
import OrderCard from '../../components/widgets/OrderCard'; 
import './Orders.css';

const SearchResultPage = () => {
 
    // const userId = useSelector((state) => state.user.userDetail.id); 
    const role = useSelector((state) => state.user.userDetail.role);
    const orders = useSelector((state)=> state.orders.orders)


    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
               
    //             const response = await fetch(`/api/orders?userId=${userId}`);
    //             const data = await response.json();
    //             setOrders(data);
    //         } catch (error) {
    //             console.error('Error fetching orders:', error);
    //         }
    //     };

    //     fetchOrders();
    // }, [userId]);

    return (
        <>
            <Navbar />
            <div className="SearchResult-orders">
                <h1 className="orders-title">My Orders</h1>
                {orders.length > 0 ? (
                    <div className="orders-list">
                        {orders.map((order) => (
                            <OrderCard key={order.id} order={order} role={role} />
                        ))}
                    </div>
                ) : (
                    <p className="no-orders">You have no orders yet.</p>
                )}
            </div>
        </>
    );
};

export default SearchResultPage;
