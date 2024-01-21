// SignUp.js

import axios from 'axios';
import React, { useState } from 'react';
const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const user = await axios.post("http://localhost:4000/signup", formData)
            console.log(user.data)
            alert("user suceesfully signup")
        } catch (error) {
            alert(error.message)
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
