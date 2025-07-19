import React, { useState } from 'react';

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
      'The personalized attention and rigorous curriculum at Sai Coaching Academy helped me achieve my academic goals. I’m grateful for their dedication.',
  },
  {
    name: 'Rohan Verma',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'The learning environment at Sai Coaching Academy is motivating and conducive to success. The teachers’ expertise and encouragement were invaluable.',
  },
];

export default function Timetable() {
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? results.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === results.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Timetable & Results</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {Object.keys(timetableData).map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`pb-2 font-medium ${
              selectedClass === cls
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Timetable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {timetableData[selectedClass].map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{row.day}</td>
                <td className="px-4 py-2">{row.time}</td>
                <td className="px-4 py-2">{row.subject}</td>
                <td className="px-4 py-2">{row.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Results</h3>
        <div className="relative">
          {/* Slider */}
          <div className="flex items-center justify-center space-x-4">
            <button onClick={handlePrev} className="text-2xl px-2">&#8592;</button>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
              <img
                src={results[currentSlide].image}
                alt={results[currentSlide].name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-bold">{results[currentSlide].name}</h4>
              <p className="text-gray-600 mt-2 text-sm">"{results[currentSlide].quote}"</p>
            </div>
            <button onClick={handleNext} className="text-2xl px-2">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
