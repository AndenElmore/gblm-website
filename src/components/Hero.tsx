"use client";

import { useEffect, useState } from "react";

const VIDEOS = [
  "/videos/hq-video-new.mov",
  "/videos/dji_fly_20260207_162720_0154_1770679613097_video.mov",
  "/videos/ground-breaker-land-management-work.mov",
  "/videos/dji_fly_20260207_160912_0151_1770679921443_video.mov",
  "/videos/E08F1868-CEAA-46F4-8DAD-FD8FDD79A615.mov",
  "/videos/dji_fly_20260207_161254_0152_1770679791280_video.mov"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VIDEOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {VIDEOS.map((src, index) => {
          // Pre-load current and next video to optimize bandwidth while maintaining transitions
          const isVisibleOrNext = currentSlide === index || ((currentSlide + 1) % VIDEOS.length) === index;
          return (
            <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
              {isVisibleOrNext && (
                <video autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover">
                  <source src={src} type="video/mp4" />
                  <source src={src} type="video/quicktime" />
                </video>
              )}
            </div>
          );
        })}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="content-box">
          <h1>Full-Service Land Management & Site Prep in Oconee County</h1>
          <h2>Professional land clearing, grading, and field maintenance delivering durable and high-quality outdoor solutions for Bogart, Watkinsville, and Athens.</h2>
          <div className="hero-btns">
            <a href="#contact" className="btn">Start Your Project <i className="fa-solid fa-arrow-right"></i></a>
            <a href="tel:+17065103942" className="btn btn-outline"><i className="fa-solid fa-phone"></i> (706) 510-3942</a>
          </div>
        </div>
      </div>
    </section>
  );
}
