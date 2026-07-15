"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
          Financing is an option! Ask us about flexible payment plans for your next project. 🚜
          <span>•</span>
        </div>
      </div>

      <div className="top-bar">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span><i className="fa-solid fa-phone"></i> <a href="tel:+17065103942">(706) 510-3942</a></span>
            <span><i className="fa-solid fa-envelope"></i> <a href="mailto:groundbreakerlandmanagement@gmail.com">groundbreakerlandmanagement@gmail.com</a></span>
            <span className="hidden md:flex"><i className="fa-solid fa-location-dot"></i> Oconee County, GA</span>
          </div>
          <div className="flex gap-4 ml-6 items-center">
            <a href="https://www.facebook.com/profile.php?id=61584159944480" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-facebook text-lg text-[var(--accent-gold)]"></i>
            </a>
          </div>
        </div>
      </div>

      <header>
        <div className="container nav-container">
          <a href="/" className="logo" aria-label="Ground Breaker Land Management home">
            <Image
              src="/images/logo-web-v2.png"
              alt="Ground Breaker Land Management - Land Clearing & Land Management in Bogart, Athens & Oconee County GA"
              width={400}
              height={300}
              className="h-full w-auto"
              priority
              unoptimized
            />
          </a>

          <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
            <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>

          <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a href="/" onClick={() => setMenuActive(false)}>Home</a>
            <a href="/#services" onClick={() => setMenuActive(false)}>Services</a>
            <a href="/#about" onClick={() => setMenuActive(false)}>About</a>
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
