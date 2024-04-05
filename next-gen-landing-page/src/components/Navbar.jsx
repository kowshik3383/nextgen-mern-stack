import { useState , useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the CSS file
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <nav data-aos="zoom-in"  className="w-full flex py-6 justify-between items-center navbar">
<h1  className="w-[124px] h-[32px] text-white text-2xl font-bold shadow-black" >Next Gen</h1>

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
    <a className="pl-4" href="/signup">Sign Up</a>
  </li>
  <li className="font-poppins font-normal cursor-pointer text-[16px] text-dimWhite">
    <a href="/login">Login</a>
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
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
