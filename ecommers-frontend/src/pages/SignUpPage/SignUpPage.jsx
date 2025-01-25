import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import Navbar from '../../components/layout/Navbar';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        mobile: '',
        password: '',
        isSeller: false,
        role: 'user',
    });

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
            role: checked ? 'admin' : 'user',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.userName || !formData.email || !formData.mobile || !formData.password) {
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

        fetch('http://192.168.0.143:8080/users/signup', options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('Registration successful!');
                navigate('/Login');
            })
            .catch((error) => {
                console.error(error);
                alert('Registration failed.');
            });
    };



    return (
        <div>
            <Navbar></Navbar>
            <div className="center-container">

                <div className="form-container-signUp">
                    <h2>User Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="input-signUp"
                            type="text"
                            name="userName"
                            value={formData.userName}
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
                        <button className="button-signUp" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
