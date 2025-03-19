import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/layout/Navbar';
import OrderCard from '../../components/widgets/OrderCard'; 
import './Orders.css';

const SearchResultPage = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const userId = useSelector((state) => state.user.userDetail.userId);
    const role = useSelector((state) => state.user.userDetail.role);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setToken(sessionStorage.getItem("token")); 
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
              console.log(role);
                const url = role === "Seller" ? "http://localhost:8082/order" : `http://localhost:8082/order/${userId}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const Data = await response.json();
                console.log(Data.data);
                setOrders(Array.isArray(Data.data) ? Data.data : []);

            } catch (error) {
                console.error('Error occurred:', error);
                setOrders([]);
            }
        };

        fetchData();
    }, [userId, token, role]);

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
