// AreasWeServe.tsx — homepage section linking to every "Areas We Serve" town page
// (per the local-SEO method: the homepage links to all area pages). Styled to match
// the site's premium look (charcoal band + gold accents).

import Link from "next/link";
import { areaList } from "@/data/areas";

export default function AreasWeServe() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="container">
        <div className="section-header">
          <h2>Areas We Serve</h2>
        </div>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto -mt-8 mb-12">
          Based in Bogart, we provide land clearing, grading, bush hogging, and full land
          management across Oconee County and the greater Athens area.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {areaList.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="btn inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-location-dot"></i>
              {a.label}, GA
            </Link>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link href="/locations" className="btn btn-large inline-flex items-center gap-2">
            View All Areas We Serve <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
