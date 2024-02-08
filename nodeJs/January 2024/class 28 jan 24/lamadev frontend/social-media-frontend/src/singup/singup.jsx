import axios from 'axios';
import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { Email, Lock, Person } from '@mui/icons-material';
export function SignUp() {
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/auth/register', formData);
            if (response.status) {
                alert(response.data.message);
                navigate('/login');
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className="singupMainContainer">
            <div className="SignUpContainer">
                <Person />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="SignUpInput"
                />
                <Email />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="SignUpInput"
                />
                <Lock />
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="SignUpInput"
                />

                <button onClick={handleSubmit} className="SignUpButton">
                    Sign Up
                </button>
            </div>
        </div>
    );
}
