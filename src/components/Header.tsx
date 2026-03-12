"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <span><i className="fa-solid fa-phone"></i> <a href="tel:+17065103942">(706) 510-3942</a></span>
          <span><i className="fa-solid fa-envelope"></i> <a href="mailto:groundbreakerlandmanagement@gmail.com">groundbreakerlandmanagement@gmail.com</a></span>
          <span><i className="fa-solid fa-location-dot"></i> Oconee County, GA</span>
        </div>
      </div>

      <header>
        <div className="container nav-container">
          <div className="logo">
            <Image 
              src="/images/logo-web.png" 
              alt="Ground Breaker Land Management Logo" 
              width={400} 
              height={300} 
              className="h-full w-auto" 
              priority
              unoptimized
            />
          </div>

          <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
            <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>

          <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMenuActive(false)}>Home</a>
            <a href="#services" onClick={() => setMenuActive(false)}>Services</a>
            <a href="#about" onClick={() => setMenuActive(false)}>About</a>
            <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
            <div className="nav-cta">
              <a href="#contact" className="btn" onClick={() => setMenuActive(false)}>Request a Quote</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
