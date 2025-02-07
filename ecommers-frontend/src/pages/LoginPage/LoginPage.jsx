import React, { useState } from 'react';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice/UserSlice';
import Navbar from '../../components/layout/Navbar';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('All fields are required');
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch('http://localhost:8082/user', options);
      const data = await response.json();

      if (response.ok) {
        const { userID, name, email, mobile, role } = data.data;
        dispatch(login({ email, name, userID, mobile, role }));
        
       
        navigate('/Profile'); 
      } else {
        alert('Login failed: ' + data.message); 
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('An error occurred while logging in.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  return ( <div>
     <Navbar></Navbar>
    <div className="login-body">
       
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-loginUp"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            className="input-loginUp"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button className="button-loginUp" type="submit">
            Login
          </button>
        </form>

        <div className="signup-option">
          <p>Don't have an account?</p>
          <button onClick={handleCreateAccount} className="create-account-button">
            Create New Account
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
