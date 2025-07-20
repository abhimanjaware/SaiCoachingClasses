import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, BookOpen, Award, Target, TrendingUp, Star, Trophy, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { 
    label: "Students Enrolled", 
    value: 15000, 
    icon: Users,
    description: "Active learners nationwide",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    label: "Batches Completed", 
    value: 1000, 
    icon: BookOpen,
    description: "Successfully graduated",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    label: "Expert Instructors", 
    value: 30, 
    icon: Award,
    description: "Highly qualified teachers",
    color: "from-purple-500 to-indigo-500"
  },
  { 
    label: "Success Rate", 
    value: 99.9, 
    suffix: "%", 
    icon: Target,
    description: "Student satisfaction score",
    color: "from-orange-500 to-red-500"
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "Top Ranking Institute",
    description: "Ranked #1 in Maharashtra for competitive exam preparation"
  },
  {
    icon: Star,
    title: "Excellence Award 2024",
    description: "Recognized for outstanding educational contributions"
  },
  {
    icon: GraduationCap,
    title: "100% Results",
    description: "All students successfully cleared their target exams"
  }
];

const Stats = () => {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);
  const achievementRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats cards
      gsap.set(statsRefs.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
      });

      gsap.to(statsRefs.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate achievement cards
      gsap.set(achievementRefs.current, {
        opacity: 0,
        x: -30,
      });

      gsap.to(achievementRefs.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animate numbers
      stats.forEach((stat, i) => {
        const statElement = statsRefs.current[i]?.querySelector('.stat-number');
        if (statElement) {
          ScrollTrigger.create({
            trigger: statElement,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.fromTo(
                statElement,
                { innerText: 0 },
                {
                  innerText: stat.value,
                  duration: 2.5,
                  snap: { innerText: 1 },
                  ease: "power2.out",
                  modifiers: {
                    innerText: (text) => {
                      return stat.suffix
                        ? parseFloat(text).toFixed(1) + stat.suffix
                        : Math.floor(text).toLocaleString();
                    },
                  },
                }
              );
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Proven Impact
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to educational excellence and student success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                ref={(el) => (statsRefs.current[i] = el)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`bg-gradient-to-r ${stat.color} rounded-full p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <div
                    className={`stat-number text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    0
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Our Key Achievements
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, i) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={i}
                  ref={(el) => (achievementRefs.current[i] = el)}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Be part of our growing community of successful students and achieve your dreams with expert guidance.
            </p>
            
            <Link to="/contact">
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;