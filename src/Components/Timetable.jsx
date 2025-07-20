import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toppers from './Toppers';
import Testimonials from './Testimonials';
import Footer from './Footer';
import WhatsappButton from "./WhatsappButton";


const timetableData = {
  'Class 10': [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', subject: 'Mathematics', teacher: 'Mr. Sharma' },
    { day: 'Tuesday', time: '10:30 AM - 11:30 AM', subject: 'Science', teacher: 'Ms. Verma' },
    { day: 'Wednesday', time: '9:00 AM - 10:00 AM', subject: 'English', teacher: 'Ms. Kapoor' },
    { day: 'Thursday', time: '10:30 AM - 11:30 AM', subject: 'Social Studies', teacher: 'Mr. Singh' },
    { day: 'Friday', time: '9:00 AM - 10:00 AM', subject: 'Mathematics', teacher: 'Mr. Sharma' },
  ],
  'Class 11': [
    { day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Physics', teacher: 'Mr. Khanna' },
    { day: 'Wednesday', time: '11:30 AM - 12:30 PM', subject: 'Chemistry', teacher: 'Ms. Roy' },
    { day: 'Friday', time: '10:00 AM - 11:00 AM', subject: 'Mathematics', teacher: 'Mr. Sharma' },
  ],
  'Class 12': [
    { day: 'Tuesday', time: '9:00 AM - 10:00 AM', subject: 'Biology', teacher: 'Dr. Iyer' },
    { day: 'Thursday', time: '11:00 AM - 12:00 PM', subject: 'Physics', teacher: 'Mr. Khanna' },
    { day: 'Saturday', time: '10:00 AM - 11:00 AM', subject: 'Mathematics', teacher: 'Mr. Sharma' },
  ],
};

const results = [
  {
    name: 'Aarav Patel',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'Sai Coaching Academy provided me with the guidance and resources I needed to excel in my exams. The teachers are incredibly supportive and knowledgeable.',
  },
  {
    name: 'Anika Sharma',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote:
      'The personalized attention and rigorous curriculum at Sai Coaching Academy helped me achieve my academic goals. I\'m grateful for their dedication.',
  },
  {
    name: 'Rohan Verma',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'The learning environment at Sai Coaching Academy is motivating and conducive to success. The teachers\' expertise and encouragement were invaluable.',
  },
];

export default function Timetable() {
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? results.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === results.length - 1 ? 0 : prev + 1));
  };

  // Smooth entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Table animation when class changes
  useEffect(() => {
    setTableVisible(false);
    const timer = setTimeout(() => setTableVisible(true), 150);
    return () => clearTimeout(timer);
  }, [selectedClass]);

  return (
    <>
    <div className="min-h-screen pt-[20vh] w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className={`max-w-6xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sai Coaching Academy
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-2">
            Timetable & Results
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Class Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-2 inline-flex space-x-1">
            {Object.keys(timetableData).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedClass === cls
                    ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden mb-16 transition-all duration-500 transform ${tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">
              {selectedClass} Schedule
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Day</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Teacher</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {timetableData[selectedClass].map((row, index) => (
                  <tr key={index} className="hover:bg-indigo-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-900">{row.day}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                        {row.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Results Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Student Success Stories</h3>
          <p className="text-gray-600 mb-12">Hear from our successful students</p>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-indigo-50 text-indigo-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-indigo-50 text-indigo-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Student Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mx-8 transition-all duration-500 hover:shadow-2xl">
              <div className="relative">
                <img
                  src={results[currentSlide].image}
                  alt={results[currentSlide].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-100 shadow-md"
                />
                <div className="absolute -top-2 -right-2 bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                  ★
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {results[currentSlide].name}
              </h4>
              
              <div className="flex justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed italic max-w-2xl mx-auto">
                "{results[currentSlide].quote}"
              </p>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {results.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-indigo-600 w-8' 
                      : 'bg-gray-300 hover:bg-indigo-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Toppers/>
    <Testimonials/>
    <Footer/>
    <WhatsappButton/>
    </>
  );
}