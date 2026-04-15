import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ProjectGallery from "@/components/ProjectGallery";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Services />
        <BeforeAfter />
        <About />
        {/* <Reviews /> */}
        {/* <ProjectGallery /> */}
        {/* <ServiceArea /> */}
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
