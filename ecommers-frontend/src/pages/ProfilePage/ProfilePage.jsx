import React, { useEffect } from 'react';
import './ProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from '../../features/userSlice/UserSlice'; 
import Navbar from '../../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const token = sessionStorage.getItem("token");
    const userIds = sessionStorage.getItem("userId");
   
    const getUser = async () => {
        if (!token || !userIds) {
            console.warn("No token or userId found, redirecting to login.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8082/getUser/${userIds}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    console.error("Unauthorized access, logging out.");
                    dispatch(logout());
                    navigate('/Login');
                    return;
                }
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('User Data:', data);

            if (data.status) {
                const { userId, name, email, mobile, role } = data.data;
                dispatch(login({ email, name, userId, mobile, role }));
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        if (token && userIds) {
            getUser();
        }
    }, [token, userIds]);  // Dependency array ensures it re-runs if session values change

    const user = useSelector((state) => state.user.userDetail);

    const logoutHandler = () => {  
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        dispatch(logout()); 
        navigate('/Login');
    };

    const navigateToOrders = () => {
        navigate('/my-orders'); 
    };

    return (
        <div>
            <Navbar />
            <div className="customer-profile">
                <div className="profile-header">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                        alt="Customer Avatar"
                        className="profile-avatar"
                    />
                    <h1 className="profile-name">{user?.name || "Guest"}</h1>
                    <p className="profile-email">{user?.email || "No Email"}</p>
                </div>

                <div className="profile-sections">
                    <div className="section">
                        <h2 className="section-title">Account Details</h2>
                        <p><strong>Full Name:</strong> {user?.name || "N/A"}</p>
                        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                        <p><strong>Phone:</strong> {user?.mobile || "N/A"}</p>
                        <p><strong>Role:</strong> {user?.role || "N/A"}</p>
                    </div>

                    <div className="section">
                        <h2 className="section-title">My Orders</h2>
                        <button
                            className="settings-button settings-orders"
                            onClick={navigateToOrders}  
                        >
                            View My Orders
                        </button>
                    </div>

                    <div className="section">
                        <button
                            className="settings-button settings-logout"
                            onClick={logoutHandler}  
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
