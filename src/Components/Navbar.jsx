import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Timetable & Results", href: "#timetable-results" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkMode = scrolled || menuOpen;
  const textColor = isDarkMode ? "text-black" : "text-white";
  const blurAmount = isDarkMode ? "backdrop-blur-[14px]" : "backdrop-blur-[8px]";
  const bgOpacity = isDarkMode ? "bg-white/80" : "bg-black/20";

  return (
    <>
      <header className={`fixed top-0 w-[90vw] lg:w-[80vw] rounded-2xl mt-4 z-50 shadow-lg ${blurAmount} ${bgOpacity} transition-all duration-300`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[10vh]">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-lg lg:text-2xl font-bold flex items-center">
                <span className=""><img className="h-12" src="src\assets\ChatGPT Image Jul 19, 2025, 01_51_25 PM.png" alt="" /></span>
                <span className={`${textColor} font-bold whitespace-nowrap transition-colors duration-300`}>Sai Coaching Academy</span>
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex text-lg space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${textColor} hover:text-blue-600 font-medium transition-colors duration-300`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="#enroll"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full transition"
              >
                Enroll Now
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${textColor} focus:outline-none transition-all duration-300`}
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    menuOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen backdrop-blur-[18px] bg-white/90 transition-all duration-500 ease-in-out transform ${
              menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
            }`}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black text-xl font-medium hover:text-blue-600 transition-colors duration-300 py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#enroll"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition mt-6"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;