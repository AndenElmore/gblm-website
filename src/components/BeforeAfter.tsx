"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const examples = [
    {
      id: 5,
      title: "Bushhogging Fields & Pastures",
      before: "/images/bushhogging-before.jpg",
      after: "/images/bushhogging-after.jpg",
    },
    {
      id: 6,
      title: "Lot Clearing & Reclamation",
      before: "/images/IMAGE%202026-05-25%2011:44:15.jpg",
      after: "/images/IMAGE%202026-05-25%2011:44:35.jpg",
    },
    {
      id: 1,
      title: "Land Clearing & Reclamation",
      before: "/images/Scene_1before.jpg",
      after: "/images/Scene_1after.jpg",
    },
    {
      id: 2,
      title: "Brush & Debris Removal",
      before: "/images/Scene_2before.jpg",
      after: "/images/Scene_2after.jpg",
    },
    {
      id: 3,
      title: "Site Preparation & Grading",
      before: "/images/Scene_3before.jpg",
      after: "/images/Scene_3after.jpg",
    },
    {
      id: 4,
      title: "Final Property Transformation",
      before: "/images/Scene_4before.jpg",
      after: "/images/Scene_4after.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % examples.length);
  }, [examples.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section id="before-after" className="section-padding !bg-[#111111]">
      <div className="container">
        
        {/* The section title and styling now matches the rest of the website exactly */}
        <div className="section-header !mb-16">
          <h2 className="!text-white">Real Projects completed in Oconee County</h2>
          <p className="text-center text-lg text-gray-400 max-w-2xl mx-auto -mt-10 mb-10">
            Witness the transformation of local properties through our professional land management services.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Clean Side-by-Side Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* BEFORE PANEL */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-white/10 shadow-lg">
                <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
                  Before
                </div>
                <Image 
                  src={examples[currentIndex].before} 
                  alt="Property Before" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.2em]">Initial State</p>
              </div>
            </div>

            {/* AFTER PANEL */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#615d5c]/40 shadow-lg">
                <div className="absolute top-4 right-4 z-20 bg-[#615d5c] text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
                  After
                </div>
                <Image 
                  src={examples[currentIndex].after} 
                  alt="Property After" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="text-[#615d5c] font-bold uppercase text-xs tracking-[0.2em]">{examples[currentIndex].title}</p>
              </div>
            </div>

          </div>

          {/* Carousel Controls - Cleaned up to match site icons */}
          <div className="flex items-center justify-center gap-10 mt-12 pt-6 border-t border-white/5">
            <button 
              onClick={prevSlide}
              className="text-white/40 hover:text-[#9cc0ed] transition-colors"
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-left text-2xl"></i>
            </button>

            <div className="flex gap-3">
              {examples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-[#9cc0ed] w-10' : 'bg-white/10 w-3 hover:bg-white/20'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="text-white/40 hover:text-[#9cc0ed] transition-colors"
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-right text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
