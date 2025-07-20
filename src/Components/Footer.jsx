import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      iconsRef.current,
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <footer className="bg-black text-white w-full">
      {/* Google Map */}
      <div className="w-full">
        <iframe
          title="Sai Coaching Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8390812288863!2d73.754682!3d19.161981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddfb6c6c14381f%3A0x650b287d9f7ae7a8!2sVijaylaxmi%20Row%20House%2C%20Wasan%20Nagar%2C%20Nashik%2C%20Maharashtra%20422010!5e0!3m2!1sen!2sin!4v1721452091234!5m2!1sen!2sin"
          width="100%"
          height="280"
          style={{ border: 0, filter: "grayscale(30%) brightness(110%) contrast(120%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10 py-10">
        {/* Logo + Description */}
        <div>
          <h2 className="font-bold text-xl mb-3">SAI COACHING CLASSES</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Sai Coaching Classes has been a cornerstone of quality education
            since inception. Join us to experience a transformative learning
            journey toward academic excellence.
          </p>
          <div className="text-sm mt-4">
            <p>
              <span className="font-semibold">Add:</span> Vijaylaxmi Row House,
              Behind Wasan Toyota Showroom, Wasan Nagar, Pathardi Phata – 422010
            </p>
            <p>
              <span className="font-semibold">Call:</span> 0253 231 5800
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              info@saicoaching.com
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">CET Preparation</a></li>
            <li><a href="#">NEET Coaching</a></li>
            <li><a href="#">JEE Preparation</a></li>
            <li><a href="#">P.C.M.B. Integrated</a></li>
            <li><a href="#">IIT Mains Advanced</a></li>
            <li><a href="#">11th & 12th Science</a></li>
          </ul>
        </div>

        {/* Contacts / Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
          <p className="text-sm text-gray-400">
            Stay updated with our latest news and results.
          </p>
          <div className="flex gap-5 mt-5 text-2xl">
            <a href="#" className="hover:text-red-500" ref={el => iconsRef.current[0] = el}>
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-pink-500" ref={el => iconsRef.current[1] = el}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-500" ref={el => iconsRef.current[2] = el}>
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gray-400 text-center py-4 border-t border-gray-800 text-sm">
        © 2024 Sai Coaching Classes | Designed by{" "}
        <span className="text-green-400">aakaar</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
