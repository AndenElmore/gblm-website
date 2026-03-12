import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ city: string }>;
};

// Simple function to format "bogart" to "Bogart"
function formatCityName(city: string) {
  return city
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const formattedCity = formatCityName(city);

  return {
    title: `Land Management & Grading in ${formattedCity}, GA | GBLM`,
    description: `Expert land management, grading, bush hogging, and site preparation services in ${formattedCity}, GA. Contact Ground Breaker Land Management today.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const formattedCity = formatCityName(city);

  return (
    <>
      <Header />
      <main>
        {/* Customized Location Hero */}
        <section id="home" className="hero">
          <div className="hero-slider">
            <div className="slide active">
              <Image 
                src="/images/location-hero-hq.jpg" 
                alt={`Land Management in ${formattedCity}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="content-box">
              <h1>Land Management Services in {formattedCity}, GA</h1>
              <h2>Professional land clearing, grading, bush hogging, and site prep tailored to properties in the {formattedCity} area and surrounding Oconee County region.</h2>
              <div className="hero-btns">
                <a href="#contact" className="btn">Get Your Quote in {formattedCity} <i className="fa-solid fa-arrow-right"></i></a>
                <a href="tel:+17065103942" className="btn btn-outline"><i className="fa-solid fa-phone"></i> (706) 510-3942</a>
              </div>
            </div>
          </div>
        </section>

        {/* Re-use Services Component */}
        <div className="bg-gray-50">
          <Services title={`Top-Rated Services in ${formattedCity}`} />
        </div>

        {/* Re-use Contact Drop-in */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
