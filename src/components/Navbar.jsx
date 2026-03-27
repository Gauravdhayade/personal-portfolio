import { useState } from "react";
import { useTheme } from "../context/ThemeContext.js";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full navbar-blur z-50 top-0"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-gray-100 to-neutral-200 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform">
          Gaurav Dhayade
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative font-semibold text-lg text-neutral-300 hover:text-primary transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle Desktop */}
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl glass hover:scale-110 hover:bg-white/20 transition-all duration-300 hidden sm:block ml-4"
          title="Toggle theme"
        >
          {darkMode ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-neutral-400" />}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 rounded-xl glass hover:scale-110 hover:bg-white/20 transition-all duration-300"
        >
          {mobileOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass border-t border-neutral-800/50"
        >
          <div className="flex flex-col space-y-4 p-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 font-semibold text-neutral-300 hover:text-primary hover:bg-white/10 rounded-xl transition-all duration-300 text-lg"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 py-3 px-4 font-semibold text-neutral-300 hover:text-primary hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              {darkMode ? (
                <>
                  <FiSun className="w-5 h-5" /> Light Mode
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5" /> Dark Mode
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

