import React from "react";
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <button onClick={handleClick} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  );
};

export default Button;
