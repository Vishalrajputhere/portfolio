import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems, siteConfig } from "../content/siteContent";


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

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuopen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuopen]);

  useEffect(() => {
    if (menuopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuopen]);

  const handleHireMe = () => {
    window.location.href = `mailto:${siteConfig.email}?subject=Hiring%20Inquiry&body=Hello,%0D%0A%0D%0AI came across your portfolio and I’m interested in discussing potential opportunities with you. Let's connect!%0D%0A%0D%0ARegards,%0D%0A[Your Name]`;
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`sticky top-0 z-50 flex min-h-16 w-full items-center justify-between border-b px-1 py-3 text-slate-100 transition-all duration-300 sm:px-2
      ${scrolling ? "border-white/10 bg-slate-950/70 shadow-lg backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <div className="flex items-center gap-3">
        <NavLink to="/" className="flex items-center gap-3 rounded-full px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
            VS
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-white">{siteConfig.name}</div>
            <div className="text-xs text-slate-300">{siteConfig.role}</div>
          </div>
        </NavLink>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        {navigationItems.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isActive ? "text-cyan-200" : "text-slate-300 hover:text-white"
              }`
            }
          >
            {label}
            <span
              className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-colors duration-200 ${
                location.pathname === path ? "bg-cyan-300" : "bg-transparent group-hover:bg-cyan-300"
              }`}
            />
          </NavLink>
        ))}

        <button
          onClick={handleHireMe}
          className="ml-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Hire Me
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-full p-2 text-2xl text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label={menuopen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuopen}
          aria-controls="mobile-nav"
        >
          {menuopen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuopen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={menuRef}
              id="mobile-nav"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-0 right-0 top-16 z-50 mx-auto flex w-[92%] flex-col items-stretch gap-2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 text-white shadow-2xl backdrop-blur-xl md:hidden"
            >
              {navigationItems.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.label}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-medium transition ${
                      isActive ? "bg-cyan-400/10 text-cyan-200" : "text-slate-200 hover:bg-white/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={handleHireMe}
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
