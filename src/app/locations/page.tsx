// /locations — "Areas We Serve" hub page. Links to every town page (per the
// local-SEO method: homepage/hub links to all area pages).

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { areas, areaList } from "@/data/areas";

export const metadata: Metadata = {
  title: "Areas We Serve | Land Clearing & Land Management | Ground Breaker Land Management",
  description:
    "Ground Breaker Land Management provides land clearing, grading, bush hogging, and land management across Bogart, Watkinsville, Athens, and Oconee County, GA. See all the areas we serve.",
  alternates: { canonical: "https://groundbreakerlandmanagement.com/locations" },
};

export default function AreasHubPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-v2">
          <div className="container flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
            <div className="w-full md:w-1/2">
              <nav className="mb-5 text-sm text-gray-300 font-semibold" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
                <span className="mx-2 opacity-40">/</span>
                <span className="text-[var(--accent-gold)]">Areas We Serve</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                Areas We Serve in Oconee County & Around Athens, GA
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-9 max-w-xl">
                Based in Bogart, Ground Breaker Land Management provides land clearing, grading, bush hogging, and full land management throughout Oconee County and the greater Athens area. Find your town below to see how we can help with your property.
              </p>
              <a href="#contact" className="btn">Get a Free Estimate <i className="fa-solid fa-arrow-right ml-1"></i></a>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10"
                style={{ boxShadow: "18px 18px 0px var(--accent-gold)" }}
              >
                <Image
                  src="/images/location-hero-hq.jpg"
                  alt="Ground Breaker Land Management service area across Oconee County and Athens, GA"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              {areaList.map((a) => {
                const area = areas[a.href.split("/").pop() as string];
                return (
                  <Link key={a.href} href={a.href} className="service-card group" style={{ minHeight: "auto" }}>
                    <div className="service-image-container">
                      <Image src={area?.heroImage ?? "/images/location-hero-hq.jpg"} alt={area?.heroAlt ?? a.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="service-text-content">
                      <i className="fa-solid fa-location-dot"></i>
                      <h3>{a.label}, GA</h3>
                      <p>{area?.schemaDescription}</p>
                      <span className="btn btn-small inline-flex items-center gap-2 self-start">
                        View {a.label} <i className="fa-solid fa-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
