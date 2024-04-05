import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the CSS file
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      // Global settings...
    });
  }, []);

  const history = useNavigate();

  const handleClick = () => {
    if (toggle) {
      history("/login");
    } else {
      setToggle(true);
    }
  };

  const handleClic = () => {
    if (toggle) {
      history("/signup");
    } else {
      setToggle(true);
    }
  };

  return (
    <nav data-aos="zoom-in" className="w-full flex py-6 justify-between items-center navbar">
      <h1 className="w-[124px] h-[32px] text-white text-2xl font-bold shadow-black">Next Gen</h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* Add Sign-in and Login buttons */}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mr-10">
          <button className="pl-4" onClick={handleClic}>Sign Up</button>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite">
          <button onClick={handleClick}>Login</button>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* Add Sign-in and Login buttons for small screens */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite mb-4">
              <button className="pl-4" onClick={handleClic}>Sign Up</button>
            </li>
            <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite">
              <button onClick={handleClick}>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
