import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Award, Star } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Aarav Mehta",
    desc: "Scored 99.2% in CBSE Boards (Science)",
    marks: "99.2%",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    achievement: "CBSE Boards",
    subject: "Science Stream"
  },
  {
    id: 2,
    name: "Ishita Sharma",
    desc: "JEE Mains Topper - AIR 312",
    marks: "AIR 312",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    achievement: "JEE Mains",
    subject: "Engineering"
  },
  {
    id: 3,
    name: "Dev Patel",
    desc: "NEET 2024 Score: 693/720",
    marks: "693/720",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    achievement: "NEET 2024",
    subject: "Medical"
  },
  {
    id: 4,
    name: "Simran Kaur",
    desc: "Scored 98.8% in SSC Maharashtra",
    marks: "98.8%",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    achievement: "SSC Maharashtra",
    subject: "State Board"
  },
  {
    id: 5,
    name: "Raj Deshmukh",
    desc: "CET Engineering Rank 78",
    marks: "Rank 78",
    photo: "https://randomuser.me/api/portraits/men/29.jpg",
    achievement: "CET Engineering",
    subject: "Engineering"
  },
  {
    id: 6,
    name: "Ananya Joshi",
    desc: "HSC Maharashtra Topper - 97.6%",
    marks: "97.6%",
    photo: "https://randomuser.me/api/portraits/women/72.jpg",
    achievement: "HSC Maharashtra",
    subject: "Higher Secondary"
  }
];

const Toppers = () => {
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Responsive cards calculation
  const cardsPerView = useMemo(() => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  }, [windowWidth]);

  // Create extended array for smooth infinite scrolling
  const extendedStudents = useMemo(() => {
    const extended = [...students, ...students, ...students];
    return extended.map((student, idx) => ({
      ...student,
      uniqueId: `${student.id}-${idx}`
    }));
  }, []);

  const totalSlides = students.length;
  const startIndex = totalSlides;

  // Optimized resize handler
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  // Initialize position
  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  // Smooth navigation functions
  const nextCard = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIndex(prev => {
      const newIndex = prev + 1;
      
      // Reset to middle when reaching end
      if (newIndex >= extendedStudents.length - cardsPerView) {
        setTimeout(() => {
          setIndex(startIndex);
          setIsAnimating(false);
        }, 400);
        return newIndex;
      }
      
      setTimeout(() => setIsAnimating(false), 400);
      return newIndex;
    });
  }, [isAnimating, extendedStudents.length, cardsPerView, startIndex]);

  const prevCard = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIndex(prev => {
      const newIndex = prev - 1;
      
      // Reset to middle when reaching beginning
      if (newIndex < 0) {
        setTimeout(() => {
          setIndex(startIndex + totalSlides - 1);
          setIsAnimating(false);
        }, 400);
        return newIndex;
      }
      
      setTimeout(() => setIsAnimating(false), 400);
      return newIndex;
    });
  }, [isAnimating, startIndex, totalSlides]);

  const goToSlide = useCallback((slideIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIndex(startIndex + slideIndex);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, startIndex]);

  // Auto-play
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextCard, 3500);
    } else {
      clearInterval(autoPlayRef.current);
    }
    
    return () => clearInterval(autoPlayRef.current);
  }, [nextCard, isPaused]);

  // Pause controls
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowRight') nextCard();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [prevCard, nextCard]);

  // Touch support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const threshold = 50;
    
    if (distance > threshold) nextCard();
    if (distance < -threshold) prevCard();
  }, [touchStart, touchEnd, nextCard, prevCard]);

  // Current slide indicator
  const currentSlide = useMemo(() => {
    return ((index - startIndex) % totalSlides + totalSlides) % totalSlides;
  }, [index, startIndex, totalSlides]);

  // Error handler for images
  const handleImageError = useCallback((e, student) => {
    const initials = student.name.split(' ').map(n => n[0]).join('');
    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%236b7280" font-family="system-ui" font-size="14">${initials}</text></svg>`;
  }, []);

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 sm:mb-6 shadow-lg">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Shining Stars
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the exceptional students who achieved remarkable success with our guidance and support
          </p>
        </header>

        {/* Slider */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden px-4">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(index * 100) / cardsPerView}%)`
              }}
            >
              {extendedStudents.map((student) => (
                <div
                  key={student.uniqueId}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-6 lg:p-8 h-full flex flex-col group min-h-[400px] sm:min-h-[450px]">
                    <span className="self-end bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2">
                      {student.subject}
                    </span>
                    
                    <div className="flex flex-col items-center flex-grow">
                      <div className="relative mb-4 sm:mb-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                          <img
                            src={student.photo}
                            alt={`Portrait of ${student.name}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => handleImageError(e, student)}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1.5 shadow-md">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center leading-tight">
                        {student.name}
                      </h2>
                      
                      <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3 sm:mb-4 w-full">
                        <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
                          {student.achievement}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-center flex-grow px-2">
                        {student.desc}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-3.5 sm:px-7 rounded-full shadow-lg mt-auto mx-auto">
                      {student.marks}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <nav className="flex items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={prevCard}
              className="bg-white hover:bg-gray-50 p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl group disabled:opacity-50"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 text-gray-600 group-hover:text-blue-600" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    i === currentSlide
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </div>
            
            <button
              onClick={nextCard}
              className="bg-white hover:bg-gray-50 p-2 sm:p-3 rounded-full shadow-md sm:shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl group disabled:opacity-50"
              disabled={isAnimating}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 text-gray-600 group-hover:text-blue-600" />
            </button>
          </nav>

          {/* Progress indicator */}
          <div className="mt-3 sm:mt-4 text-center">
            <span className="text-xs sm:text-sm text-gray-500">
              {currentSlide + 1} of {totalSlides}
            </span>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;