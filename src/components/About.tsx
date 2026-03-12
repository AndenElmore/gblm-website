import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="split-layout">
          <div className="about-image">
            <Image src="/images/97F1EFE5-8372-4B7B-A795-F772C0FCB6BE.jpeg" alt="Ground Breaker Owner on Tractor" width={600} height={500} className="w-full rounded shadow-xl object-cover" />
          </div>
          <div className="about-text">
            <h2>Your Local Land Partner</h2>
            <p>Ground Breaker Land Management is dedicated to transforming and maintaining properties across Oconee County and beyond. We understand the local terrain, the soil, and the unique needs of property owners in Bogart, Watkinsville, and Athens.</p>
            <p>We’re here to help you achieve your dreams, one project at a time. Whether you need a simple driveway repair or are clearing land for a new home, we have the heavy equipment and the expertise to get it done right—with efficiency, safety, and respect for your land.</p>
            <br />
            <ul className="service-list mb-5">
              <li>Locally Owned & Operated</li>
              <li>Professional Equipment</li>
              <li>Reliable Communication</li>
              <li><i className="fa-solid fa-shield-check"></i> Fully Insured</li>
            </ul>
            <a href="#contact" className="btn">Contact Us Today</a>
          </div>
        </div>
      </div>
    </section>
  );
}
