import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: ''
    });

    const navigate = useNavigate();  // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.mobile || !formData.password) {
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

        fetch('http://192.168.0.143:8080/signup', options)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    // Use navigate to go back
    const goBack = () => {
        navigate(-1);  // Navigate back to the previous page
    };

    return (
        <div className='center-container'>
            <div className="nav-bar">
                <button onClick={goBack} className="back-button">Go Back</button>
            </div>
            <div className="form-container-signUp">
                <h2>User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-signUp"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                    />
                    
                    <input
                        className="input-signUp"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    
                    <input
                        className="input-signUp"
                        type="text"  // Changed to text for better formatting on mobile input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile"
                        required
                    />
                    
                    <input
                        className="input-signUp"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    
                    <button className="button-signUp" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
