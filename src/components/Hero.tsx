"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered swipe effect: Words disappear first, Logo remains much longer
  // Logo threshold increased to 1500px for maximum brand exposure
  const textProgress = Math.min(scrollY / 400, 1);
  const logoProgress = Math.min(scrollY / 1300, 1);
  
  const textSwipeStyle = {
    opacity: 1 - textProgress * 1.5,
    transform: `scale(${1 - textProgress * 0.1}) translateY(${-textProgress * 80}px)`,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
  };

  const logoSwipeStyle = {
    opacity: 1 - logoProgress * 0.8, // Fades very slowly (still 20% visible at the end)
    transform: `scale(${1 - logoProgress * 0.15}) translateY(${-logoProgress * 180}px)`, // Dramatic upward swipe
    transition: 'transform 0.15s ease-out, opacity 0.15s ease-out'
  };

  const headline = "Full-Service Land Management & Site Prep in Oconee County";
  const words = headline.split(" ");

  return (
    <section id="home" className="hero-v2">
      <div className="container flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-12">
        <div 
          className="w-full md:w-1/2"
          style={scrollY > 0 ? textSwipeStyle : {}}
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
          style={scrollY > 0 ? logoSwipeStyle : {}}
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
