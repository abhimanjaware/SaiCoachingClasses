import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Timetable from './Components/Timetable';
import WhyUsSection from './Components/Why';
import Toppers from './Components/Toppers';
import Stats from './Components/Stats';
import AboutBrief from './Components/AboutBrief';
import Aboutmain from './Components/Aboutmain';
import CourseGrid from './Components/CourseGrid';
import Contacts from './Components/Contacts';
import Testimonials from './Components/Testimonials';

// Optional Enroll Component (you can replace this)
const Enroll = () => (
  <div className="min-h-screen flex items-center justify-center text-3xl font-semibold text-blue-600">
    Enrollment Page Coming Soon!
  </div>
);

// Scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhatsappButton from './Components/WhatsappButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex justify-center flex-col items-center bg-gradient-to-b from-white to-blue-50/50 overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
               
                {/* <Testimonials /> */}
                {/* <Contacts /> */}

                <WhatsappButton/>
              </>
            }
          />
          <Route path="/Home" element={<Hero />} />
          <Route path="/about" element={<Aboutmain />} />
          <Route path="/courses" element={<CourseGrid />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/enroll" element={<Enroll />} />

          {/* Optional: 404 page */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl text-red-600">404 - Page Not Found</div>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
