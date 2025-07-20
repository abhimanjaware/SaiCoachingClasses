import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../assets/4-1-qdcrno8zblz2tck9z8mvv0xz6in0c23ze9u49ht9gw.jpg';
import image2 from '../assets/group-positive-young-people-working-together.jpg';
import image3 from '../assets/young-students-learning-together-group-study.jpg';
import WhyUsSection from './Why';
import AboutBrief from './AboutBrief';
import Stats from './Stats';
import Toppers from './Toppers';
import Footer from './Footer';
import Testimonials from './Testimonials';
import CourseGrid from './CourseGrid';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const images = useMemo(() => [image1, image2, image3], []);

  // Image preloading and cycling
  useEffect(() => {
    // Preload all images to prevent flickering
    const imagePromises = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });

    // Image cycling interval
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!isLoaded) {
    return (
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  return (
    <>
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${img})`,
              willChange: i === currentImageIndex || i === (currentImageIndex + 1) % images.length ? 'opacity' : 'auto'
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-950/40 to-black/70" />

      {/* Floating Elements - Simplified */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-cyan-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-400/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Main Content */}
      <div className="relative z-20 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-3xl flex flex-col justify-center text-center w-[90vw] lg:w-[80vw] h-[80vh] px-6 md:px-10 py-10 mt-[12vh] animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 animate-slide-up">
          Sai Coaching Classes
        </h1>
        
        <p className="text-lg md:text-2xl lg:text-3xl mb-2 text-blue-100 font-semibold animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Top-Rated Coaching for NEET, JEE & Board Exams in Nashik
        </p>
        
        <p className="text-sm md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          From 8th to 12th | CBSE, ICSE, State | PCMB, CET, NEET, JEE
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/courses">
    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
      View Courses
    </button>
  </Link>
          <Link to="/contact">
           <button className="bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
            Contact Now
          </button>
          </Link>
        </div>
      </div>



      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }

        /* Optimize for performance */
        .animate-pulse {
          animation-duration: 4s;
        }
      `}</style>

      
    </section>
    <AboutBrief />
    <WhyUsSection />
    <Toppers />
    <Stats />
    <Testimonials />
    <Footer/>
    </>

    
  );
}