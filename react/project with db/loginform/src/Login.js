// Login.js

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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
    try {
      const user = await axios.post("http://localhost:4000/signin", formData)
      console.log(user.data)
      localStorage.setItem("token", user.data.token)
      navigate("/profile")
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)

    }
    console.log('Login form submitted:', formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
