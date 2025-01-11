import { React, useState } from 'react'
import './LoginPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout,login } from '../../features/userSlice/UserSlice';
const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        
    });
    const dispatch = useDispatch(); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( !formData.email ||  !formData.password) {
            alert('All fields are required');
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };
        fetch('http://192.168.0.143:8080/login', options)
    .then(response => response.json()) 
    .then(data => {
        console.log(data.data);
        const { userID,userName, email, password, mobile,role } = data.data;

        console.log("UuserID:", userID);
        console.log("Username:", userName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Mobile:", mobile);
        console.log("role",role);
        
    
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
    };
    dispatch(login(formData));

    return (
        <div>

            < div className='login-body'>
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

                        <button className="button-loginUp" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default LoginPage;
