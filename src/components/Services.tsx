import Image from "next/image";

export default function Services({ title = "Our Services" }: { title?: string }) {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
          
        <div className="max-w-4xl mx-auto relative group" style={{ marginTop: "60px", marginBottom: "100px" }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-gray)] to-[var(--accent-blue)] rounded-2xl blur opacity-20 transition duration-500 group-hover:opacity-40"></div>
          <div className="relative bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-gray-100">
            <div className="shrink-0 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center border border-yellow-100">
              <i className="fa-solid fa-file-invoice-dollar text-2xl text-[var(--accent-blue)]"></i>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 font-['Montserrat']">Need Financing? We've Got You Covered.</h3>
              <p className="text-gray-600">
                Land management is a major investment. We offer flexible, stress-free payment plans so you can start your property improvement today!
              </p>
            </div>
            <div className="shrink-0 mt-4 md:mt-0">
              <a href="#contact" className="btn inline-flex items-center gap-2">
                <span>Get Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {/* Service 1: Clearing & Demolition */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/service-clearing-upright.jpg" 
                alt="Clearing & Demolition" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-tractor"></i>
              <h3>Clearing & Demolition</h3>
              <p>Professional lot clearing and small structure removal to prep your site for building or landscaping.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 2: Grading & Site Prep */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/grading-site-prep-new.jpg" 
                alt="Grading & Site Prep" 
                fill 
                className="object-cover object-top"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-mountain"></i>
              <h3>Grading & Site Prep</h3>
              <p>Expert terrain development and soil leveling for optimal water drainage and construction readiness.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 3: Driveways & Access Roads */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/IMG_0019.JPG" 
                alt="Driveways & Roads" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-road"></i>
              <h3>Driveways & Roads</h3>
              <p>Professional driveway maintenance, grading, and gravel refreshing to ensure durable and safe access to your property.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 4: Seeding & Tilling */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/IMG_0026.JPG" 
                alt="Seeding & Tilling" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-seedling"></i>
              <h3>Seeding & Tilling</h3>
              <p>Lush lawn establishment and soil preparation through precision tilling and nutrient-rich seeding.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 5: Shrub & Bush Removal */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/shrub-bush-removal.jpg" 
                alt="Shrub & Bush Removal" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-tractor"></i>
              <h3>Shrub & Bush Removal</h3>
              <p>Complete removal of overgrown shrubs, hedges, and invasive bushes to reclaim your yard and restore your landscape.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 6: Tree & Storm Cleanup */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/service-cleanup-hq.jpg" 
                alt="Tree & Storm Cleanup" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-tree"></i>
              <h3>Tree & Storm Cleanup</h3>
              <p>Efficient removal of fallen trees, limbs, and debris after storms or for general property safety.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 7: Stump Grinding */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/IMG_0111.jpeg" 
                alt="Stump Grinding" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-gear"></i>
              <h3>Stump Grinding</h3>
              <p>Complete removal of unsightly stumps to clear the way for new landscaping or safe mowing transitions.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 8: Spraying Weed Control & Fertilizer */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/weed control.png" 
                alt="Spraying Weed Control & Fertilizer" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-leaf"></i>
              <h3>Spraying Weed Control</h3>
              <p>Professional spraying services to eliminate invasive weeds and fertilize your land for optimal growth and health.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 9: Bushhogging Fields & Pastures */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/bushhogging-after.jpg" 
                alt="Bushhogging Fields & Pastures" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-tractor"></i>
              <h3>Bushhogging Fields & Pastures</h3>
              <p>Efficiently mow down tall grass, thick brush, and saplings to maintain and restore your fields and pastures.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

          {/* Service 10: Lawn Rolling */}
          <div className="service-card">
            <div className="service-image-container">
              <Image 
                src="/images/lawn-rolling.jpg" 
                alt="Lawn Rolling" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="service-text-content">
              <i className="fa-solid fa-tractor"></i>
              <h3>Lawn Rolling</h3>
              <p>Smooth out uneven terrain, press down frost heave, and ensure optimal seed-to-soil contact for a flawless, level yard.</p>
              <a href="#contact" className="btn btn-small">Book Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
