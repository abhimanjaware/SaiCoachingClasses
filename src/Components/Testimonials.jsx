import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TestimonialsGSAP = () => {
  const trackRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    const cardSelector = ".testimonial-card";
    const baseCards = gsap.utils.toArray(cardSelector);
    const cloneCount = 1;

    // Clone just once for seamless scroll
    for (let i = 0; i < cloneCount; i++) {
      baseCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.classList.add("cloned-card");
        container.appendChild(clone);
      });
    }

    const allCards = gsap.utils.toArray(cardSelector);
    const cardWidth = allCards[0]?.offsetWidth || 260;
    const gap = parseFloat(getComputedStyle(container).gap) || 2;
    const scrollDistance = (cardWidth + gap) * baseCards.length;

    const tl = gsap.to(container, {
      x: `-=${scrollDistance}`,
      duration: 50,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % scrollDistance),
      },
      onUpdate: () => {
        const containerRect = container.getBoundingClientRect();
        const centerX = window.innerWidth / 2;

        allCards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(centerX - cardCenter);

          const scale = gsap.utils.clamp(0.9, 1.1, 1 - distance / (isMobile ? 1300 : 1000));
          const opacity = gsap.utils.clamp(0.4, 1, 1 - distance / (isMobile ? 1600 : 900));

          gsap.set(card, { scale, opacity });
        });
      },
    });

    loopRef.current = tl;

    // Pause/resume on hover/touch
    const pause = () => tl.pause();
    const play = () => tl.play();

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);
    container.addEventListener("touchstart", pause);
    container.addEventListener("touchend", play);

    return () => {
      tl.kill();
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", play);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      desc: "Achieved an outstanding 99.2% in CBSE Boards (Science) with Sai Coaching’s expert guidance.",
      marks: "99.2%",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      achievement: "CBSE Boards",
      subject: "Science Stream",
    },
    {
      id: 2,
      name: "Ishita Sharma",
      desc: "Secured an impressive AIR 312 in JEE Mains—thanks to focused mentoring and mock tests at Sai Coaching.",
      marks: "AIR 312",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      achievement: "JEE Mains",
      subject: "Engineering",
    },
    {
      id: 3,
      name: "Dev Patel",
      desc: "Scored a remarkable 693/720 in NEET 2024, building a strong foundation through Sai’s rigorous practice sessions.",
      marks: "693/720",
      photo: "https://randomuser.me/api/portraits/men/42.jpg",
      achievement: "NEET 2024",
      subject: "Medical",
    },
    {
      id: 4,
      name: "Simran Kaur",
      desc: "Excelled with 98.8% in SSC Maharashtra Board exams—thanks to the personal attention and result-oriented approach at Sai Coaching.",
      marks: "98.8%",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
      achievement: "SSC Maharashtra",
      subject: "State Board",
    },
    {
      id: 5,
      name: "Raj Deshmukh",
      desc: "Ranked 78 in CET Engineering with help from Sai Coaching’s structured preparation and doubt-solving support.",
      marks: "Rank 78",
      photo: "https://randomuser.me/api/portraits/men/29.jpg",
      achievement: "CET Engineering",
      subject: "Engineering",
    },
    {
      id: 6,
      name: "Ananya Joshi",
      desc: "Topped HSC Maharashtra Board with 97.6%, crediting Sai Coaching for the consistency and concept clarity.",
      marks: "97.6%",
      photo: "https://randomuser.me/api/portraits/women/72.jpg",
      achievement: "HSC Maharashtra",
      subject: "Higher Secondary",
    },
  ];

  return (
    <div className="relative h-fit w-full bg-[#D9D9D9] py-20 overflow-hidden">
      <div className="w-full py-16 text-center leading-normal px-8">
        <h2 className="text-4xl font-black uppercase tracking-tight text-[#27270e]">
          Testimonials
        </h2>
        <span className="text-zinc-900/90 font-[Dancing_Script] text-xl">
          Stories from students and parents at{" "}
          <span className="font-medium text-black">Sai Coaching Classes</span>
        </span>
      </div>

      {/* Gradient Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#D9D9D9] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#D9D9D9] to-transparent pointer-events-none" />

      {/* Carousel */}
      <div className="overflow-hidden w-full px-4 flex justify-center relative z-10">
        <div
          ref={trackRef}
          className="flex gap-2 sm:gap-3 w-max items-center"
          style={{ willChange: "transform" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card relative bg-[#27170e] text-white border-[2px] border-[#27170e]/10 rounded-3xl p-6 shadow-md w-[250px] sm:w-[300px] md:w-[340px] lg:w-[400px] h-[400px] sm:h-[440px] lg:h-[500px] flex flex-col items-center justify-between flex-shrink-0"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between text-center">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover border-2 border-white shadow mb-4 mx-auto"
                />
                <p className="text-sm sm:text-base md:text-lg font-light italic px-2">
                  “{t.desc}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold uppercase text-sm sm:text-base">
                    {t.name}
                  </p>
                  <p className="text-gray-200 text-xs sm:text-sm">{t.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsGSAP;
