import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutBrief = () => {
  return (
    <section className="about-brief px-6 md:px-20 py-16 bg-white flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="relative w-full">
        <img
          src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/healthcarembagwu/2022/08/31032905/execs-standing-with-arms-crossed-in-studio-500x334.jpg"
          alt="Welcome"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl w-full">
        <h3 className="text-gray-500 font-semibold uppercase text-sm mb-2">
          About Us
        </h3>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Sai Coaching Classes
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to Sai Coaching Classes, a leading educational institution dedicated
          to providing high-quality education and fostering academic excellence
          since 1988. Established by the visionary Mr. Bachhav, our institute has
          been instrumental in shaping the future of countless students by
          imparting knowledge, nurturing talent, and instilling values that go
          beyond the classroom.
        </p>

        <ul className="space-y-3 mb-6">
          {[
            "Expert Trainers",
            "Personalized Attention",
            "Innovative Teaching Methods",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-yellow-500" />
              {item}
            </li>
          ))}
        </ul>

        <Link to="/about">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition">
            Know More About Us →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutBrief;
