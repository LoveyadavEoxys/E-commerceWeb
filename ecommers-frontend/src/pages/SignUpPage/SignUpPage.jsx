import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import Navbar from '../../components/layout/Navbar';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        isSeller: false,
        role: 'customer',
    });

    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            isSeller: checked,
            role: checked ? 'Seller' : 'customer',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        const { name, email, mobile, password } = formData;
        if (!name.trim() || !email.trim() || !mobile.trim() || !password.trim()) {
            alert('All fields are required');
            return;
        }

        setLoading(true); 

        try {
            const response = await fetch('http://localhost:8082/user', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful!');
                navigate('/Login');
            } else {
                alert('Registration failed: ' + (data.message || 'Try again.'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed due to an error.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <Navbar />
            <div className="center-container">
                <div className="form-container-signUp">
                    <h2>User Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="input-signUp"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="UserName"
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
                            type="text"
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
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="isSeller"
                                name="isSeller"
                                checked={formData.isSeller}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="isSeller">Register as Seller</label>
                        </div>
                        <button className="button-signUp" type="submit" disabled={loading}>
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
