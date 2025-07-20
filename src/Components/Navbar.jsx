import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/ChatGPT Image Jul 19, 2025, 01_51_25 PM.png'; // Adjust the path to your logo image
import Hero from "./Hero";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Courses", to: "/courses" },
    { name: "Timetable & Results", to: "/timetable" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkMode = scrolled || menuOpen;

  return (
    <>
      <header 
        className={`fixed top-0 w-[90vw] lg:w-[80vw] xl:w-[80vw] rounded-3xl mt-2 z-50 transition-all duration-700 ease-out transform ${
          scrolled ? 'backdrop-blur-[20px] text-white shadow-2xl shadow-black/10 border border-white/20' 
          : 'backdrop-blur-[12px] bg-black/25 shadow-xl text-white shadow-black/20 border border-white/10'
        }`}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-[12vh] min-h-[70px]">
            {/* Logo */}
            <a href="/">
              <div className="flex items-center group">
              <div className="relative overflow-hidden rounded-2xl p-1 ">
                <div className="w-12 h-12 ">
                  <img src={logo} alt="" />
                </div>
              </div>
              <span className={`ml-3 text-xl lg:text-2xl font-bold transition-all duration-500 ${
                isDarkMode ? 'text-gray-800' : 'text-white'
              } group-hover:text-blue-500`}>
                Sai Coaching Academy
              </span>
            </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex text-lg space-x-1">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.to}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
                      isDarkMode ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                    } ${
                      location.pathname === link.to ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {hoveredLink === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-blue-500/20 animate-pulse" />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                to="/enroll"
                className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Enroll Now</span>
              </Link>
            </div>

            {/* Burger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`relative w-10 h-10 rounded-full transition-all duration-300 ${
                  isDarkMode ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-6 h-6">
                    <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? 'rotate-45 top-2.5' : ''
                    }`} />
                    <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : ''
                    }`} />
                    <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? '-rotate-45 top-2.5' : ''
                    }`} />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen transition-all duration-500 ease-out ${
              menuOpen 
                ? "translate-y-0 opacity-100 visible backdrop-blur-[25px] bg-gradient-to-br from-white/95 to-gray-50/95" 
                : "-translate-y-full opacity-0 invisible"
            }`}
          >
            {/* Close Button */}
            <div className="absolute top-8 right-8 z-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center h-full space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-gray-800 text-2xl font-medium hover:text-blue-600 transition-all duration-300 py-4 px-8 rounded-2xl hover:bg-blue-50/50 backdrop-blur-sm transform hover:scale-105 ${
                    menuOpen ? `animate-fade-in-up` : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className={`mt-8 ${menuOpen ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
                <Link
                  to="/enroll"
                  onClick={() => setMenuOpen(false)}
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Enroll Now</span>
                </Link>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </nav>
      </header>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
