import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-v2">
      <div className="container flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-12">
        <div className="w-full md:w-1/2">
          <div className="content-box !text-left !border-l-8 !border-t-0">
            <h1>Full-Service Land Management & Site Prep in Oconee County</h1>
            <h2>Professional land clearing, grading, and field maintenance delivering durable and high-quality outdoor solutions for Bogart, Watkinsville, and Athens.</h2>
            <div className="hero-btns !justify-start">
              <a href="#contact" className="btn">Get Your Estimate <i className="fa-solid fa-arrow-right"></i></a>
              <a href="tel:+17065103942" className="btn btn-outline"><i className="fa-solid fa-phone"></i> (706) 510-3942</a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center">
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
