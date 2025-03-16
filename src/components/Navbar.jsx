import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { MdPersonOutline } from "react-icons/md";
import logo from "../img/logo.png";
import { motion } from 'framer-motion';

const navbarVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Navbar() {
  const [menuopen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href =
      "mailto:singhrajputvishal03@gmail.com?subject=Hiring%20Inquiry&body=Hello,%0D%0A%0D%0AI came across your portfolio and I’m interested in discussing potential opportunities with you. Let's connect!%0D%0A%0D%0ARegards,%0D%0A[Your Name]";
  };

  return (
    <motion.nav variants={navbarVariants} initial="initial" animate="animate"
      className={`min-w-full min-h-14 text-white font-black text-2xl flex flex-row justify-between items-center px-5 sticky top-0 left-0 z-50 transition-all duration-300
      ${scrolling ? "bg-gray-900/70 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      {/* Left-aligned logo */}
      <div className="flex items-center cursor-pointer">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            className="rounded-lg ml-5 transition-all duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-5">
        {[
          { name: "Home", path: "/", icon: <FaHome className="inline mr-2" /> },
          { name: "About Me", path: "/about", icon: <MdPersonOutline className="inline mr-2" /> },
          { name: "Project", path: "/project", icon: <FaLaptopCode className="inline mr-2" /> },
          { name: "Resume", path: "/resume", icon: <SiReaddotcv className="inline mr-2" /> },
        ].map(({ name, path, icon }) => (
          <Link key={name} to={path} className="relative items-center flex group cursor-pointer">
            <span className="sm:mx-5 cursor-pointer hover:text-blue-600">
              {icon} {name}
            </span>
            {/* Underline Progress Bar */}
            <div className="absolute left-0 -bottom-1 h-1.5 w-0 rounded-md bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
          </Link>
        ))}

        {/* "Hire Me" Button */}
        <button
          onClick={handleClick}
          className="sm:mx-7 px-4 py-2 bg-purple-700 text-white border-2 border-black rounded-md font-mono transition-all duration-300 ease-in-out hover:bg-purple-400 hover:text-black text-center hover:scale-105"
        >
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuopen)} className="text-3xl">
          {menuopen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuopen && (
        <div className="md:hidden absolute top-14 left-0 flex flex-col py-4 space-y-4 w-full items-center text-white bg-gray-900/80 backdrop-blur-lg z-50">
          {[
            { name: "Home", path: "/", icon: <FaHome /> },
            { name: "About Me", path: "/about", icon: <MdPersonOutline /> },
            { name: "Project", path: "/project", icon: <FaLaptopCode /> },
            { name: "Resume", path: "/resume", icon: <SiReaddotcv /> },
          ].map((item) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 hover:text-blue-400 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Mobile "Hire Me" Button */}
          <button
            onClick={() => {
              setMenuOpen(false);
              handleClick();
            }}
            className="bg-purple-700 text-white px-4 py-2 rounded-md font-mono transition-all duration-300 ease-in-out hover:bg-purple-400 hover:text-black"
          >
            Hire Me
          </button>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
