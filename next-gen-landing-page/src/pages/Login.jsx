import React, { useState } from 'react';
import axios from 'axios';
import {Link , useNavigate} from "react-router-dom"

function Login() {
 const navigate = useNavigate()
  // Hook to manage navigation history
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if ( !email || !password ) {
      alert('Please fill in all required fields.');
      return; // Prevent form submission if validation fails
    }

    try {
      const response = await axios.post('https://server-4-muw9.onrender.com/api/signin', formData);
      console.log('Login Successful:', response.data);
      navigate('/')
      
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 rounded-md bg-white shadow-lg">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="block relative"> 
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" required />
        </div>
        <div className="block relative"> 
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" required />
        </div>
        <div>
          <a href="#" className="text-sm text-[#7747ff]">Forgot your password?</a>
        </div>
        <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link to="/sign-up" className="text-sm text-[#7747ff]">Sign up for free!</Link></div>
    </div>
  );
}

export default Login;