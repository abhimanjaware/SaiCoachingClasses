import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const WhatsappButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const bounce = gsap.timeline({ repeat: -1, yoyo: true, ease: 'power1.inOut' });
    bounce.to(btnRef.current, {
      y: -10,
      duration: 0.6,
    });
    return () => bounce.kill(); // clean up on unmount
  }, []);

  return (
    <a
      href="https://wa.me/919999999999" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-3 right-2 md:bottom-6 md:right-4.5 z-50"
    >
      <div
        ref={btnRef}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out"
      >
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
};

export default WhatsappButton;
