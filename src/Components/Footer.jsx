import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 ">
      {/* Google Map */}
      <div className="w-full">
        <iframe
          title="Sai Coaching Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3489484965984!2d73.79397357437166!3d19.136478382073407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba40b437e89%3A0x4e6cb6c6f7a3ff9e!2sBachhav%20Classes%20-%20Ashok%20Stambh!5e0!3m2!1sen!2sin!4v1721280338955!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
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
              <span className="font-semibold">Add:</span> Old Agra Road, Nashik,
              Maharashtra 422001
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
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">CET Preparation</a></li>
            <li><a href="#">NEET Coaching</a></li>
            <li><a href="#">JEE Preparation</a></li>
            <li><a href="#">P.C.M.B. Integrated Course</a></li>
            <li><a href="#">IIT Mains Advanced</a></li>
            <li><a href="#">11th & 12th Science</a></li>
          </ul>
        </div>

        {/* Contact / Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contacts</h3>
          <p className="text-sm text-gray-400 mb-3">
            Enter your email address to register to our newsletter subscription
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-black"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gray-400 text-center py-4 border-t border-gray-800 text-sm">
        Copyright 2024 Sai Coaching Classes | Designed by <span className="text-green-400">Wamtech</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
