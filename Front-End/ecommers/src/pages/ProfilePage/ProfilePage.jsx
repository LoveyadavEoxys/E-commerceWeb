import React from 'react';
import './ProfilePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/userSlice/UserSlice'; 
const ProfilePage = () => {
    const user = useSelector((state) => state.user.userDetail); 
    const dispatch = useDispatch();

    const logoutHandler = () => {  
        dispatch(logout()); 
    };

    return (
        <div>
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
