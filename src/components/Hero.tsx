"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // Cancel pending frame to prevent stacking
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Apply styles directly to the DOM to bypass React's render cycle.
        // This eliminates all jitter caused by state updates syncing with scroll events.
        if (textRef.current) {
          const textProgress = Math.min(scrollY / 400, 1);
          textRef.current.style.opacity = `${1 - textProgress * 1.5}`;
          textRef.current.style.transform = `scale(${1 - textProgress * 0.1}) translateY(${-textProgress * 80}px)`;
          // Notice we removed the CSS transition: it fights JS for control.
        }

        if (logoRef.current) {
          const logoProgress = Math.min(scrollY / 1300, 1);
          logoRef.current.style.opacity = `${1 - logoProgress * 0.8}`;
          logoRef.current.style.transform = `scale(${1 - logoProgress * 0.15}) translateY(${-logoProgress * 180}px)`;
        }
      });
    };
    
    // Use passive listener for better scroll performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Call once to ensure initial state is correct and styles are applied
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const headline = "Full-Service Land Management & Site Prep in Oconee County";
  const words = headline.split(" ");

  return (
    <section id="home" className="hero-v2">
      <div className="container flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-12">
        <div 
          className="w-full md:w-1/2"
          ref={textRef}
        >
          <div className="content-box !text-left !border-l-8 !border-t-0">
            <h1 className="hero-h1">
              {words.map((word, i) => (
                <span 
                  key={i} 
                  className="highlight-span" 
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <h2>Professional land clearing, grading, and field maintenance delivering durable and high-quality outdoor solutions for Bogart, Watkinsville, and Athens.</h2>
            <div className="hero-btns !justify-start">
              <a href="#contact" className="btn">Get Your Estimate <i className="fa-solid fa-arrow-right"></i></a>
              <a href="tel:+17065103942" className="btn btn-outline"><i className="fa-solid fa-phone"></i> (706) 510-3942</a>
            </div>
          </div>
        </div>
        
        <div 
          className="w-full md:w-1/2 flex justify-center items-center"
          ref={logoRef}
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image 
              src="/images/logo-web.png" 
              alt="GBLM Logo" 
              fill 
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
