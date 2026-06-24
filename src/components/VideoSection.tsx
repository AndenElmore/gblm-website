"use client";

import { useState, useRef, useEffect } from "react";

const showcaseVideos = [
  {
    id: 1,
    src: "/videos/FInal%20hero%20video%20(52526).mp4",
    title: "Field Mowing & General Clearing"
  },
  {
    id: 2,
    src: "/videos/telegram/video_AgADEwgAAm46qUQ.MP4",
    title: "Heavy Equipment Operation"
  },
  {
    id: 3,
    src: "/videos/telegram/video_AgADoQgAAteu4UQ.MP4",
    title: "Brush Clearing"
  },
  {
    id: 4,
    src: "/videos/telegram/video_AgADMQgAAkGooEU.MOV",
    title: "Lot Reclamation"
  }
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseVideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseVideos.length) % showcaseVideos.length);
  };

  // When the index changes, explicitly load and play the new video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => console.log("Autoplay prevented", e));
    }
  }, [currentIndex]);

  return (
    <section className="video-section">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="!text-white text-3xl font-bold mb-4 uppercase tracking-wider">Project Showcase</h2>
          <p className="text-[#9cc0ed] font-medium tracking-wide">
            {showcaseVideos[currentIndex].title}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="video-carousel-container relative aspect-video bg-black">
            <video 
              ref={videoRef}
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata" 
              className="w-full h-full object-cover"
            >
              <source src={showcaseVideos[currentIndex].src} type="video/mp4" />
              {/* Fallback for MOV files on some browsers */}
              <source src={showcaseVideos[currentIndex].src} type="video/quicktime" />
            </video>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto bg-black/50 hover:bg-[#d4a017] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-lg"
              aria-label="Previous Video"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto bg-black/50 hover:bg-[#d4a017] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-lg"
              aria-label="Next Video"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {showcaseVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-[#d4a017] w-8" : "bg-white/30 w-2 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
           <p className="text-gray-400 italic font-medium tracking-wide">High-efficiency land clearing & terrain development in action.</p>
        </div>
      </div>
    </section>
  );
}
