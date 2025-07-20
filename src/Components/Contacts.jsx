import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';
import WhatsappButton from "./WhatsappButton";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
   <>
    <div className="bg-white pt-[15vh] w-full">
      {/* Hero Image Banner */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] lg:hidden relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl lg:text-5xl font-bold">
          We're Here to Help!
        </div>
      </div>

      {/* Contact Section */}
      <section
        ref={sectionRef}
        className="bg-[#f9fbfe] py-20 px-6 md:px-10 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl p-10 w-full lg:w-1/2 transition hover:shadow-2xl duration-300">
              <h3 className="text-3xl font-semibold text-blue-900 mb-6">Contact Details</h3>
              <div className="space-y-6 text-blue-700 text-base leading-relaxed">
                <div>
                  <p className="font-semibold">📍 Address</p>
                  <p>
                    1, Vijaylaxmi Row House, <br />
                    Behind Wasan Toyota Showroom,<br />
                    Wasan Nagar, Pathardi Phata - 422010
                  </p>
                </div>
                <div>
                  <p className="font-semibold">📞 Phone</p>
                  <p>09724785115</p>
                </div>
                <div>
                  <p className="font-semibold">✉️ Email</p>
                  <p>info@example.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <p className="text-blue-900 font-semibold mb-3">Follow us:</p>
                <div className="flex gap-5 text-blue-600 text-2xl">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square hover:text-blue-800 transition"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram hover:text-pink-500 transition"></i>
                  </a>
                  <a href="https://wa.me/919724785115" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp hover:text-green-500 transition"></i>
                  </a>
                  <a href="tel:09724785115">
                    <i className="fas fa-phone-alt hover:text-blue-500 transition"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10 w-full lg:w-1/2 transition hover:shadow-2xl duration-300">
              <h3 className="text-3xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition duration-300"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    <WhatsappButton/>
   </>
  );
};

export default Contact;
