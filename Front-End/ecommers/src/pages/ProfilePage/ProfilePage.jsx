import React from 'react'
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <div>
            <div className="customer-profile">
                {/* Profile Header */}
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Customer Avatar"
                        className="profile-avatar"
                    />
                    <h1 className="profile-name">love yadav</h1>
                    <p className="profile-email">@example.com</p>
                </div>

                {/* Profile Sections */}
                <div className="profile-sections">
                    {/* Account Details */}
                    <div className="section">
                        <h2 className="section-title">Account Details</h2>
                        <p><strong>Full Name:</strong> love yadav</p>
                        <p><strong>Email:</strong> @example.com</p>
                        <p><strong>Phone:</strong> 00000 0000</p>
                    </div>

                    {/* Address Details */}
                    <div className="section">
                        <h2 className="section-title">Address</h2>
                        <p><strong>Primary Address:</strong></p>
                        <p>bangalore</p>
                    </div>

                    {/* Order History */}
                    {/* <div className="section">
          <h2 className="section-title">Order History</h2>
          <ul className="order-list">
            <li>
              <p><strong>Order #12345</strong></p>
              <p>Date: 01/05/2023</p>
              <p>Total: $150.00</p>
              <button className="order-button">View Details</button>
            </li>
            <li>
              <p><strong>Order #12346</strong></p>
              <p>Date: 02/15/2023</p>
              <p>Total: $80.00</p>
              <button className="order-button">View Details</button>
            </li>
          </ul>
        </div> */}

                    {/* Settings */}
                    <div className="section">
                        <h2 className="section-title">Account Settings</h2>

                        <button className="settings-button settings-logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
