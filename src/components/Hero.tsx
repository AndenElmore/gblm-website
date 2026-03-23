"use client";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        <div className="slide active">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            className="w-full h-full object-cover"
          >
            <source src="/videos/David_Hero_Main.mp4" type="video/mp4" />
          </video>
        </div>
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
