import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const students = [
  {
    name: "Aarav Mehta",
    desc: "Scored 99.2% in CBSE Boards (Science)",
    marks: "99.2%",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    achievement: "CBSE Boards",
    subject: "Science Stream"
  },
  {
    name: "Ishita Sharma",
    desc: "JEE Mains Topper - AIR 312",
    marks: "AIR 312",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    achievement: "JEE Mains",
    subject: "Engineering"
  },
  {
    name: "Dev Patel",
    desc: "NEET 2024 Score: 693/720",
    marks: "693/720",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    achievement: "NEET 2024",
    subject: "Medical"
  },
  {
    name: "Simran Kaur",
    desc: "Scored 98.8% in SSC Maharashtra",
    marks: "98.8%",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    achievement: "SSC Maharashtra",
    subject: "State Board"
  },
  {
    name: "Raj Deshmukh",
    desc: "CET Engineering Rank 78",
    marks: "Rank 78",
    photo: "https://randomuser.me/api/portraits/men/29.jpg",
    achievement: "CET Engineering",
    subject: "Engineering"
  },
  {
    name: "Ananya Joshi",
    desc: "HSC Maharashtra Topper - 97.6%",
    marks: "97.6%",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    achievement: "HSC Maharashtra",
    subject: "Higher Secondary"
  },
];

const Toppers = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const visibleCards = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(visibleCards());

  useEffect(() => {
    const handleResize = () => setCardsPerView(visibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCard = () => {
    setIndex((prev) =>
      (prev + 1) % Math.max(1, students.length - cardsPerView + 1)
    );
  };

  const prevCard = () => {
    setIndex((prev) =>
      (prev - 1 + Math.max(1, students.length - cardsPerView + 1)) %
      Math.max(1, students.length - cardsPerView + 1)
    );
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const totalSlides = Math.max(1, students.length - cardsPerView + 1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardRefs.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
      });

      gsap.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Shining Stars
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the exceptional students who achieved remarkable success with our guidance and support
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={containerRef}
              className="flex gap-6 lg:gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
                width: `${(students.length * 100) / cardsPerView}%`,
              }}
            >
              {students.map((student, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group"
                  style={{ width: `${100 / students.length}%` }}
                >
                  <div className="p-8 lg:p-10 text-center relative">
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {student.subject}
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                      {student.name}
                    </h3>
                    
                    <div className="bg-gray-50 rounded-lg px-4 py-2 mb-4 inline-block">
                      <p className="text-sm font-medium text-gray-700">
                        {student.achievement}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed">
                      {student.desc}
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg lg:text-xl py-3 px-6 rounded-full inline-block shadow-lg">
                      {student.marks}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={prevCard}
              className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl group"
              disabled={index === 0}
            >
              <ChevronLeft className={`w-5 h-5 transition-colors duration-200 ${index === 0 ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === index
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCard}
              className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl group"
              disabled={index === totalSlides - 1}
            >
              <ChevronRight className={`w-5 h-5 transition-colors duration-200 ${index === totalSlides - 1 ? 'text-gray-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;