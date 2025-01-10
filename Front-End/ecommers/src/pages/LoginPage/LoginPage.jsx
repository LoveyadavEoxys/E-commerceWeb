import {React,useState} from 'react'

import './LoginPage.css'
import Navbar from '../../components/layout/Navbar';

const LoginPage = ({hendelRasisteration}) => {
 const [formData, setFormData] = useState({
         username: '',
         email: '',
         mobile: '',
         password: ''
     });
 
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
             body: JSON.stringify(formData)
           };
           fetch('http://192.168.0.143:8080/login', options)
             .then(response => response.json())
             .then(data => console.log(data))
             .catch(error => console.error(error));
     };

    return (
        <div>
         
            < div className='login-body'>
                <div className="login-container">
                    <h2>Login</h2>
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
                    type="number"
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
                
                <button className="button-signUp" type="submit">Login</button>
            </form>
                </div>
            </div>
        </div>
        

    )
}

export default LoginPage;
