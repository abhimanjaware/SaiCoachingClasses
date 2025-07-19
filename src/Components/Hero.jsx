import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);




// Import your local images
import image1 from '../assets/4-1-qdcrno8zblz2tck9z8mvv0xz6in0c23ze9u49ht9gw.jpg';
import image2 from '../assets/group-positive-young-people-working-together.jpg';
import image3 from '../assets/young-students-learning-together-group-study.jpg';



gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const hooklineRef = useRef(null);
  const buttonsRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3];





  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, hooklineRef.current], {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      gsap.set(buttonsRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      gsap.set(floatingElementsRef.current, {
        opacity: 0,
        scale: 0,
        rotation: 45
      });

      // Main animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate title with bounce effect
      tl.to(titleRef.current, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(1.7)",
      })
      
      // Animate subtitle and hookline with stagger
      .to([subtitleRef.current, hooklineRef.current], {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.6")
      
      // Animate buttons with stagger
      .to(buttonsRef.current.children, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: 0.15
      }, "-=0.4")
      
      // Animate floating elements
      .to(floatingElementsRef.current, {
        duration: 1,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: "power2.out",
        stagger: 0.3
      }, "-=0.8");

      // Continuous floating animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            duration: 3 + index,
            y: "+=20",
            rotation: "+=10",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.5
          });
        }
      });


    }, containerRef);

    

    return () => ctx.revert();
  }, []);

  

  
  return (
    <>
      <style jsx>{`
        .image-slider {
          position: relative;
          overflow: hidden;
        }

        .image-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .image-slide.active {
          opacity: 1;
        }

      .dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(20, 20, 40, 0.55) 5%,
    rgba(0, 0, 0, 0.5) 5%,
    rgba(10, 10, 30, 0.55) 75%,
    rgba(0, 0, 0, 0.7) 80%
  );
}


        .glass-card {
          backdrop-filter: blur(7px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .btn-primary {
          background: linear-gradient(135deg, #0066ff, #0052cc);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #0052cc, #0041a3);
          box-shadow: 0 15px 35px rgba(0, 102, 255, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.125rem !important;
          }
          
          .hero-hookline {
            font-size: 1rem !important;
          }
        }
      `}</style>

      <section
        ref={containerRef}
        className="image-slider relative h-screen w-full flex  items-center justify-center text-white font-sans overflow-hidden"
      >
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="dark-overlay" />

        {/* Floating Elements */}
        <div 
          ref={(el) => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl z-10"
        />
        <div 
          ref={(el) => floatingElementsRef.current[1] = el}
          className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl z-10"
        />
        <div 
          ref={(el) => floatingElementsRef.current[2] = el}
          className="absolute top-1/2 left-10 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg z-10"
        />
        <div 
          ref={(el) => floatingElementsRef.current[3] = el}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-400/25 rounded-full blur-md z-10"
        />
        
        {/* Main Content */}
        <div className="absolute bottom-5 lg:bottom-10 z-20 glass-card rounded-3xl flex flex-col justify-center text-center w-[90vw] lg:w-[80vw] h-[80vh]  mx-auto px-8 py-12">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight text-white"
          >
            Sai Coaching Classes
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-4 text-blue-200 font-semibold"
          >
            Top-Rated Coaching for NEET, JEE & Board Exams in Nashik
          </p>

          {/* Hookline */}
          <p
            ref={hooklineRef}
            className="hero-hookline text-base md:text-lg lg:text-xl mb-10 text-white/90 font-medium max-w-3xl mx-auto"
          >
            From 8th to 12th | CBSE, ICSE, State | PCMB, CET, NEET, JEE
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex justify-center gap-6 flex-wrap">
            <button className="btn-primary hover:scale-105 transition-all duration-300 text-white py-4 px-8 rounded-full font-semibold transform hover:-translate-y-1">
              View Courses
            </button>
            <button className="btn-secondary hover:scale-105 transition-all duration-300 text-white py-4 px-8 rounded-full font-semibold transform hover:-translate-y-1">
              Contact Now
            </button>
          </div>
        </div>
      </section>


    </>
  );
}