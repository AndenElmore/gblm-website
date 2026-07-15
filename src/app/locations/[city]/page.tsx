// /locations/[city] — "Areas We Serve" hyperlocal pages.
// Server-rendered + statically generated ONLY for our real target towns (areaSlugs).
// Any other city 404s, so this route can't produce thin/duplicate "doorway" pages.
// Content (unique per town) comes from src/data/areas.ts.

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, areaSlugs, SERVICE_LINKS } from "@/data/areas";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return areaSlugs.map((city) => ({ city }));
}

// Only build the towns we actually serve — anything else returns 404 (no thin pages).
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = areas[city];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://groundbreakerlandmanagement.com/locations/${area.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const area = areas[city];
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Ground Breaker Land Management",
        description: area.schemaDescription,
        telephone: "+1-706-510-3942",
        url: "https://groundbreakerlandmanagement.com",
        areaServed: { "@type": "City", name: `${area.town}, GA` },
      },
      {
        "@type": "FAQPage",
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* --- Split Hero (matches the service pages) --- */}
        <section className="hero-v2">
          <div className="container flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
            <div className="w-full md:w-1/2">
              <nav className="mb-5 text-sm text-gray-300 font-semibold" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">Home</Link>
                <span className="mx-2 opacity-40">/</span>
                <Link href="/locations" className="hover:text-[var(--accent-gold)] transition-colors">Areas We Serve</Link>
                <span className="mx-2 opacity-40">/</span>
                <span className="text-[var(--accent-gold)]">{area.town}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.12] tracking-tight mb-6">
                {area.name}
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed mb-9 max-w-xl">{area.intro}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn">Get a Free Estimate <i className="fa-solid fa-arrow-right ml-1"></i></a>
                <a href="tel:+17065103942" className="btn btn-outline"><i className="fa-solid fa-phone mr-1"></i> (706) 510-3942</a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div
                className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10"
                style={{ boxShadow: "18px 18px 0px var(--accent-gold)" }}
              >
                <Image src={area.heroImage} alt={area.heroAlt} fill priority className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* --- Body --- */}
        <section className="section-padding bg-white">
          <div className="container">
            <article className="max-w-3xl mx-auto">
              {area.sections.map((section, i) => (
                <div key={i} className="mb-16">
                  <h2 className="text-3xl md:text-[2rem] text-[var(--primary-gray)] font-bold mb-6 relative pb-4">
                    {section.heading}
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--accent-gold)] rounded-full" />
                  </h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-[1.08rem] leading-[1.9] text-gray-700 mb-5">{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 space-y-4">
                      {section.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-4 text-[1.08rem] leading-8 text-gray-700">
                          <i className="fa-solid fa-circle-check text-[var(--accent-gold)] text-xl mt-1 shrink-0"></i>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* --- Services We Offer Here (service <-> area interlinking) --- */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-[2rem] text-[var(--primary-gray)] font-bold mb-6 relative pb-4">
                  Services We Offer in {area.town}
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--accent-gold)] rounded-full" />
                </h2>
                <div className="flex flex-wrap gap-4">
                  {SERVICE_LINKS.map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[var(--accent-gold)] text-black font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span>{s.label}</span>
                      <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  ))}
                </div>
              </div>

              {/* --- Mid-page CTA (homepage financing-card pattern) --- */}
              <div className="my-20 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-gray)] to-[var(--accent-gold)] rounded-2xl blur opacity-20 transition duration-500 group-hover:opacity-40"></div>
                <div className="relative bg-white rounded-xl shadow-xl p-7 md:p-9 flex flex-col md:flex-row items-center gap-6 border border-gray-100">
                  <div className="shrink-0 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center border border-yellow-100">
                    <i className="fa-solid fa-location-dot text-2xl text-[var(--accent-gold)]"></i>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Serving {area.town} & the surrounding area</h3>
                    <p className="text-gray-600">Get a free, no-pressure estimate — financing options available.</p>
                  </div>
                  <div className="shrink-0 mt-2 md:mt-0">
                    <a href="#contact" className="btn inline-flex items-center gap-2"><span>Request a Quote</span><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>

              {/* --- FAQ --- */}
              <div className="mt-20">
                <h2 className="text-3xl md:text-[2rem] text-[var(--primary-gray)] font-bold mb-10 relative pb-4">
                  Frequently Asked Questions
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--accent-gold)] rounded-full" />
                </h2>
                <div className="space-y-5">
                  {area.faqs.map((f, i) => (
                    <div key={i} className="bg-[#f8f8f8] rounded-xl p-7 border border-gray-100 shadow-sm">
                      <h3 className="text-xl text-[#1a1a1a] font-bold mb-3 flex items-start gap-3">
                        <i className="fa-solid fa-circle-question text-[var(--accent-gold)] text-lg mt-1 shrink-0"></i>
                        <span>{f.q}</span>
                      </h3>
                      <p className="text-[1.05rem] leading-8 text-gray-700 pl-9">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* --- Nearby areas (area <-> area interlinking) --- */}
              <div className="mt-20">
                <h2 className="text-3xl md:text-[2rem] text-[var(--primary-gray)] font-bold mb-6 relative pb-4">
                  Nearby Areas We Serve
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--accent-gold)] rounded-full" />
                </h2>
                <div className="flex flex-wrap gap-4">
                  {area.nearby.map((n, i) => (
                    <Link
                      key={i}
                      href={n.href}
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-[var(--primary-gray)] text-[var(--primary-gray)] font-semibold hover:bg-[var(--primary-gray)] hover:text-white transition-colors"
                    >
                      {n.label}, GA <i className="fa-solid fa-arrow-right text-sm"></i>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
