import React, { useEffect, useRef } from "react";
import Stats from "./Stats";
import Footer from "./Footer";
import WhatsappButton from "./WhatsappButton";

const staffMembers = [
  {
    name: "Mr. Ramesh Patil",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    specialty: "Mathematics",
    description: "Known for simplifying complex math concepts with real-life examples and building strong fundamentals.",
    achievements: "15+ Years Experience",
    students: "500+ Students Mentored"
  },
  {
    name: "Ms. Priya Kulkarni",
    photo: "https://images.unsplash.com/photo-1699105987147-caa9269b684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    specialty: "Physics",
    description: "Expert in conceptual physics, making learning interactive and fun for students of all levels.",
    achievements: "PhD in Physics",
    students: "400+ Students Mentored"
  },
  {
    name: "Mr. Ajay Deshmukh",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    specialty: "Chemistry",
    description: "Focuses on deep understanding and smart tricks for competitive exam preparation.",
    achievements: "IIT Alumni",
    students: "350+ Students Mentored"
  },
  {
    name: "Ms. Sneha Shah",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    specialty: "Biology",
    description: "Loves teaching biology through diagrams and visual storytelling to boost memory and interest.",
    achievements: "Medical Background",
    students: "300+ Students Mentored"
  },
];

// GSAP Animation Hook
const useGSAPAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    const tl = window.gsap?.timeline({ defaults: { ease: "power3.out" } });
    
    if (!window.gsap || !containerRef.current) return;

    // Hero section animation
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      "-=0.4"
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 }, 
      "-=0.4"
    )
    .fromTo('.hero-cards', 
      { opacity: 0, y: 30, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2 }, 
      "-=0.3"
    )
    .fromTo('.hero-images', 
      { opacity: 0, scale: 0.8, rotate: -5 }, 
      { opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.15 }, 
      "-=0.6"
    );

    // Stats animation
    window.gsap.fromTo('.stats-item', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      }
    );

    // Founders animation
    window.gsap.fromTo('.founder-card', 
      { opacity: 0, scale: 0.8, rotate: -3 }, 
      { 
        opacity: 1, 
        scale: 1, 
        rotate: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.founders-section',
          start: 'top 70%',
        }
      }
    );

    // Staff cards animation
    window.gsap.fromTo('.staff-card', 
      { opacity: 0, y: 60, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.7, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.staff-section',
          start: 'top 70%',
        }
      }
    );

  }, []);

  return containerRef;
};

const AboutMain = () => {
  const containerRef = useGSAPAnimation();

  useEffect(() => {
    // Load GSAP
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    document.head.appendChild(script2);

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
    <div ref={containerRef} className="relative  overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Geometric Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-pink-600 rounded-full"></div>
        <div className="absolute top-60 left-1/2 w-6 h-6 border-2 border-blue-600 rotate-45"></div>
      </div>
      
      <div className="relative pt-[20vh] px-6 md:px-20 py-20">
        {/* Enhanced Hero Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="hero-badge inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="tracking-wide">PREMIUM EDUCATION SINCE 1988</span>
            </div>
            
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              We Provide{" "}
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                Excellence
                {/* <div className="absolute -bottom-2 left-0 leading-none w-[30vw] h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"></div> */}
              </span>
              In Education
            </h1>
            
            <p className="hero-description text-xl text-gray-700 leading-relaxed max-w-xl font-medium">
              Welcome to Sai Coaching Classes, where dreams meet reality. Since 1988, we've been the catalyst for academic excellence, transforming ambitious minds into successful leaders through innovative teaching and personalized mentorship.
            </p>

            {/* Enhanced Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-8 mt-16">
              <div className="hero-cards group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
                <div className="bg-white/90 backdrop-blur-lg border-2 border-white/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-3xl"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Empowering students to excel through personalized learning, expert guidance, and cutting-edge educational methodologies that prepare them for tomorrow's challenges.
                  </p>
                </div>
              </div>
              
              <div className="hero-cards group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
                <div className="bg-white/90 backdrop-blur-lg border-2 border-white/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-bl-3xl"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    To be the premier educational institution, shaping future leaders through innovation, excellence, and holistic development in an ever-evolving world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Images Grid */}
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[500px]">
            {/* Large main image */}
            <div className="hero-images col-span-7 row-span-5 relative overflow-hidden rounded-3xl shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop" 
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   alt="Students studying" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  Interactive Learning
                </div>
              </div>
            </div>
            
            {/* Vertical image */}
            <div className="hero-images col-span-5 row-span-8 col-start-8 relative overflow-hidden rounded-3xl shadow-2xl group">
              <img src="https://plus.unsplash.com/premium_photo-1665520346990-f02949e8c70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Jvb218ZW58MHx8MHx8fDA%3D" 
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   alt="Classroom environment" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  Modern Classrooms
                </div>
              </div>
            </div>
            
            {/* Medium images */}
            <div className="hero-images col-span-4 row-span-3 row-start-6 relative overflow-hidden rounded-2xl shadow-xl group">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" 
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   alt="Students collaboration" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="hero-images col-span-3 row-span-2 col-start-5 row-start-6 relative overflow-hidden rounded-2xl shadow-xl group">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop" 
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   alt="Study materials" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="hero-images col-span-3 row-span-1 col-start-5 row-start-8 relative overflow-hidden rounded-xl shadow-lg group">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=100&fit=crop" 
                   className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   alt="Academic excellence" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="stats-section mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievement</span> Story
            </h2>
            <p className="text-gray-600 text-lg font-medium">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Excellence", icon: "🏆", color: "from-amber-500 to-orange-500" },
              { number: "5K+", label: "Students Graduated", icon: "🎓", color: "from-blue-500 to-indigo-500" },
              { number: "95%", label: "Success Rate", icon: "📈", color: "from-green-500 to-emerald-500" },
              { number: "20+", label: "Expert Faculty", icon: "👨‍🏫", color: "from-purple-500 to-pink-500" }
            ].map((stat, idx) => (
              <div key={idx} className="stats-item group">
                <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-white/50 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="text-center relative">
                    <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                      {stat.icon}
                    </div>
                    <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Founders Section with Sticker Style */}
        <div className="founders-section mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto">
              The inspiring leaders who founded Sai Coaching Classes with a vision to transform education
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto">
            {[
              {
                name: "Mr. Vijay Bawane",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
                title: "Founder & Chairman",
                description: "The visionary behind Sai Coaching Classes, passionate about empowering rural talent and nurturing discipline, ethics, and academic excellence through innovative teaching methodologies."
              },
              {
                name: "Mrs. Sunita Bawane",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
                title: "Co-Founder & Director",
                description: "A guiding force for personalized care and emotional support in the learning process, focused on value-based education and holistic student development."
              }
            ].map((founder, idx) => (
              <div key={idx} className="founder-card group">
                {/* Sticker-style container */}
                <div className="relative">
                  {/* Main sticker background with multiple layers */}
                  <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border-4 border-white transform hover:rotate-1 hover:scale-105">
                    {/* Inner gradient border */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[2rem] opacity-60"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg transform rotate-12 group-hover:rotate-[24deg] transition-transform duration-500">
                      ✨
                    </div>
                    
                    {/* Content */}
                    <div className="relative text-center max-w-sm">
                      {/* Profile image with multiple decorative rings */}
                      <div className="relative mx-auto w-36 h-36 mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 shadow-xl">
                          <div className="w-full h-full bg-white rounded-full p-1">
                            <img 
                              src={founder.image} 
                              className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" 
                              alt={founder.name}
                            />
                          </div>
                        </div>
                        
                        {/* Floating decorative elements */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full shadow-md animate-bounce"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md animate-pulse"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {founder.name}
                      </h3>
                      
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-semibold mb-6 shadow-lg">
                        {founder.title}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm font-medium">
                        {founder.description}
                      </p>
                      
                      {/* Quote decoration */}
                      <div className="mt-4 flex justify-center space-x-1">
                        {[1,2,3].map(i => (
                          <div key={i} className={`w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${i === 2 ? 'animate-pulse' : ''}`}></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-60"></div>
                  </div>
                  
                  {/* Shadow layer for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-[2.5rem] transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Programs Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Academic</span> Programs
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
              Comprehensive education solutions tailored for your success
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Subjects Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Subjects Taught</h3>
                <div className="space-y-2">
                  {['Biology', 'Chemistry', 'Maths', 'Physics', 'Science', 'Engineering', 'PCMB', 'Personality Development'].map((subject, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Classes & Curriculum Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Classes & Curriculum</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-600 mb-2">School Classes</h4>
                    <div className="flex flex-wrap gap-2">
                      {['VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((cls, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg">
                          Class {cls}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-pink-600 mb-2">Curriculum</h4>
                    <div className="flex flex-wrap gap-2">
                      {['CBSE', 'State Board'].map((curr, idx) => (
                        <span key={idx} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-lg">
                          {curr}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrance Exams Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Entrance Exams</h3>
                <div className="space-y-2">
                  {['CET', 'IIT', 'IIT JEE', 'JEE', 'Medical Entrance', 'NEET'].map((exam, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 font-medium">{exam}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Services Card */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0v.5A2.5 2.5 0 0115.5 9H8.5A2.5 2.5 0 016 6.5V6m10 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2m8 0v.5A2.5 2.5 0 0115.5 9H8.5A2.5 2.5 0 016 6.5V6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Additional Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Higher Education</span>
                    <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded">PG</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Language Classes</span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">English</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Coaching Type</span>
                    <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">Tutorial</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Mode</span>
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">Offline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Staff Section */}
        <div className="staff-section">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expert Faculty</span>
            </h2>
            <p className="text-gray-600 text-xl font-medium max-w-2xl mx-auto">
              Meet our dedicated team of educators who make learning an inspiring journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {staffMembers.map((staff, idx) => (
              <div key={idx} className="staff-card group">
                <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-white/50 overflow-hidden h-full transform hover:-translate-y-2">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/60 to-transparent rounded-bl-3xl"></div>
                  
                  <div className="relative text-center h-full flex flex-col">
                    {/* Profile Image */}
                    <div className="relative mx-auto w-28 h-28 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-0.5 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                        <div className="w-full h-full bg-white rounded-full p-0.5">
                          <img 
                            src={staff.photo} 
                            className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-500" 
                            alt={staff.name}
                          />
                        </div>
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center text-white text-sm font-bold">
                        ✓
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {staff.name}
                    </h3>
                    
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-semibold mb-4 shadow-lg mx-auto">
                      {staff.specialty}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed font-medium">
                      {staff.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="text-xs text-blue-600 font-bold">{staff.achievements}</div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="text-xs text-purple-600 font-bold">{staff.students}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <Stats/>
    <Footer/>
    <WhatsappButton/>
    </>
  );
};

export default AboutMain;