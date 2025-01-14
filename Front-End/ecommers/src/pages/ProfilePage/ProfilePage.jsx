import React from 'react';
import './ProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice/UserSlice'; 
import Navbar from '../../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {
    const user = useSelector((state) => state.user.userDetail); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {  
        dispatch(logout()); 
        navigate('/Login');

    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="customer-profile">
          
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Customer Avatar"
                        className="profile-avatar"
                    />
                    <h1 className="profile-name">{user.name}</h1>
                    <p className="profile-email">{user.email}</p>
                </div>

               
                <div className="profile-sections">
                 
                    <div className="section">
                        <h2 className="section-title">Account Details</h2>
                        <p><strong>Full Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.mobile}</p>
                        <p><strong>role:</strong> {user.role}</p>
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
