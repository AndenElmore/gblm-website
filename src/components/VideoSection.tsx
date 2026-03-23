"use client";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="!text-white text-3xl font-bold mb-4 uppercase tracking-wider">Project Showcase</h2>
        </div>
        
        <div className="video-carousel-container">
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
        
        <div className="text-center mt-8">
           <p className="text-gray-400 italic font-medium tracking-wide">High-efficiency land clearing & terrain development in action.</p>
        </div>
      </div>
    </section>
  );
}
