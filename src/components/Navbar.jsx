import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { MdPersonOutline } from "react-icons/md";
import logo from "../img/logo.png";
import { motion, AnimatePresence } from "framer-motion";


const navbarVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } },
};

function Navbar() {
  const [menuopen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome className="inline mr-2" /> },
    {
      name: "About Me",
      path: "/about",
      icon: <MdPersonOutline className="inline mr-2" />,
    },
    {
      name: "Project",
      path: "/project",
      icon: <FaLaptopCode className="inline mr-2" />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <SiReaddotcv className="inline mr-2" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuopen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuopen]);

  // Body scroll lock when menu open
  useEffect(() => {
    if (menuopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuopen]);

  const handleHireMe = () => {
    window.location.href =
      "mailto:singhrajputvishal03@gmail.com?subject=Hiring%20Inquiry&body=Hello,%0D%0A%0D%0AI came across your portfolio and I’m interested in discussing potential opportunities with you. Let's connect!%0D%0A%0D%0ARegards,%0D%0A[Your Name]";
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`min-w-full min-h-14 text-white font-black text-2xl flex flex-row justify-between items-center px-5 sticky top-0 left-0 z-50 transition-all duration-300
      ${scrolling ? "bg-gray-900/60 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent border-b border-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            className="rounded-lg ml-5 transition-all duration-300 ease-in-out hover:scale-110"
          />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-5 items-center">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `relative items-center flex group cursor-pointer transition-all duration-300
               ${isActive ? "text-purple-400" : "text-white hover:text-blue-400"}`
            }
          >
            <span className="sm:mx-5 cursor-pointer">
              {icon} {name}
            </span>

            {/* underline */}
            <div
              className={`absolute left-0 -bottom-1 h-1.5 rounded-md transition-all duration-300 ease-in-out
              ${
                location.pathname === path
                  ? "w-full bg-purple-500"
                  : "w-0 bg-purple-500 group-hover:w-full"
              }`}
            />
          </NavLink>
        ))}

        <button
          onClick={handleHireMe}
          className="sm:mx-7 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-bold font-mono transition-all duration-300 ease-in-out hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.05] border border-white/10"
        >
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-3xl"
          aria-label="Toggle Menu"
        >
          {menuopen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay + Menu */}
      <AnimatePresence>
        {menuopen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu */}
            <motion.div
              ref={menuRef}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-14 left-0 right-0 mx-auto flex flex-col py-6 space-y-5 w-[92%] rounded-2xl items-center text-white bg-gray-900/90 backdrop-blur-lg z-50 shadow-xl"
            >
              {navItems.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.name}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 transition text-xl
                    ${isActive ? "text-purple-400" : "hover:text-blue-400"}`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}

              <button
                onClick={handleHireMe}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-bold font-mono transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/30 w-11/12 mx-auto"
              >
                Hire Me
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
