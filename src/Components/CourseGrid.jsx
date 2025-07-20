import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import AboutBrief from './AboutBrief';
import Stats from './Stats';
import Footer from './Footer';
import WhatsappButton from "./WhatsappButton";



const courses = [
  {
    title: 'IIT-JEE Mains Advance',
    description: 'Focused preparation for engineering aspirants in Physics, Chemistry & Math.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80', // Math equations on blackboard
  },
  {
    title: 'NEET Foundation',
    description: 'Solid base for Biology, Chemistry & Physics for aspiring doctors.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80', // Medical/stethoscope
  },
  {
    title: 'CET Crash Course',
    description: 'Quick revision and practice-focused sessions for last-minute prep.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80', // Books and study materials
  },
  {
    title: 'Board Booster',
    description: 'Strengthen fundamentals and scoring strategies for board exams.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80', // Classroom/blackboard
  },
  {
    title: 'P.C.M.B Integrated',
    description: 'Combined Science approach for Medical and Engineering aspirants.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', // Science laboratory
  },
  {
    title: '11th & 12th Science',
    description: 'In-depth preparation for school and competitive exams.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80', // Students studying
  },
];


const CourseGrid = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
    <div className="px-6 pt-[20vh] md:px-20 py-20 bg-gradient-to-b from-[#e0f7fa7c] to-[#e3f2fd97]">
      <h2 className="text-4xl font-extrabold text-center text-[#003366] mb-3">Our Courses</h2>
      <p className="text-center text-[#555c6d] text-lg mb-14 max-w-2xl mx-auto">
        Choose the right path for your future with our expertly designed and focused programs.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0d47a1] mb-2">{course.title}</h3>
              <p className="text-[#455a64] text-sm leading-relaxed">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <AboutBrief />
    <Stats />
    <Footer />
    <WhatsappButton/>

    </>
  );
};

export default CourseGrid;
