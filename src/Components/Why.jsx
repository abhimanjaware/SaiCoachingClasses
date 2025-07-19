import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Expert Faculty",
    desc: "Highly qualified teachers with expertise in JEE, NEET, CET, and board exam preparation.",
    icon: "https://img.icons8.com/fluency/96/teacher.png",
    bg: "bg-green-100",
  },
  {
    title: "Personalized Attention",
    desc: "Small batch sizes to ensure every student receives individual attention and personalized guidance.",
    icon: "https://img.icons8.com/fluency/96/target.png",
    bg: "bg-pink-100",
  },
  {
    title: "Doubt-Solving Sessions",
    desc: "Special sessions dedicated to clearing doubts and providing individual support.",
    icon: "https://img.icons8.com/fluency/96/idea.png",
    bg: "bg-purple-100",
  },
  {
    title: "Integrated Coaching",
    desc: "Combined preparation for both board exams and competitive exams such as JEE, NEET, and CET.",
    icon: "https://img.icons8.com/fluency/96/puzzle.png",
    bg: "bg-orange-100",
  },
  {
    title: "Communication with Parents",
    desc: "Regular updates and PTMs to keep parents informed about student progress.",
    icon: "https://img.icons8.com/fluency/96/communication.png",
    bg: "bg-blue-100",
  },
  {
    title: "Exam Analysis",
    desc: "Detailed feedback and performance reports for every test.",
    icon: "https://img.icons8.com/fluency/96/combo-chart.png",
    bg: "bg-yellow-100",
  },
];

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], { 
        opacity: 0, 
        y: 50 
      });
      
      gsap.set(cardsRef.current, { 
        opacity: 0, 
        y: 80,
        scale: 0.8,
        rotateX: 45
      });

      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });

      headerTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        }, "-=0.4");

      // Cards staggered animation
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: "start"
        },
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Card hover animations
      cardsRef.current.forEach((card) => {
        if (card) {
          const icon = card.querySelector('img');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: "back.out(1.5)"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-48 bg-white">
      <div className="text-center mb-12">
        <h2 ref={titleRef} className="text-4xl font-bold mb-2 text-gray-800">
          Why Us?
        </h2>
        <p ref={subtitleRef} className="text-lg text-gray-600">
          What makes us different from the rest
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className={`p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ${card.bg} group cursor-pointer`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-center text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;