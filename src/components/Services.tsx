import Image from "next/image";

export default function Services({ title = "Our Services" }: { title?: string }) {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>

        <div className="services-grid">
          {/* Service 1: Clearing & Demolition */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/service-clearing-hq.jpg" 
                alt="Clearing & Demolition" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Clearing & Demolition</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-tractor"></i>
                <h3>Clearing & Demolition</h3>
                <p>Professional lot clearing and small structure removal to prep your site for building or landscaping.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          {/* Service 2: Grading & Site Prep */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/IMG_0026.JPG" 
                alt="Grading & Site Prep" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Grading & Site Prep</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-mountain"></i>
                <h3>Grading & Site Prep</h3>
                <p>Expert terrain development and soil leveling for optimal water drainage and construction readiness.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          {/* Service 3: Driveways & Access Roads */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/IMG_0019.JPG" 
                alt="Driveways & Roads" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Driveways & Roads</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-road"></i>
                <h3>Driveways & Roads</h3>
                <p>Professional driveway maintenance, grading, and gravel refreshing to ensure durable and safe access to your property.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          {/* Service 4: Seeding & Tilling */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/IMG_0012.JPG" 
                alt="Seeding & Tilling" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Seeding & Tilling</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-seedling"></i>
                <h3>Seeding & Tilling</h3>
                <p>Lush lawn establishment and soil preparation through precision tilling and nutrient-rich seeding.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/service-bush-hogging-hq.jpg" 
                alt="Bush Hogging & Field Reclaiming" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Bush Hogging</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-wheat-awn"></i>
                <h3>Bush Hogging</h3>
                <p>Bush hogging is heavy-duty clearing for thick brush, tall grass, and saplings that a standard mower can't handle. We help you reclaim overgrown fields and pastures, restoring your land to a clean and manageable state.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          {/* Service 6: Tree & Storm Cleanup */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/service-cleanup-hq.jpg" 
                alt="Tree & Storm Cleanup" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Tree & Storm Cleanup</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-tree"></i>
                <h3>Tree Cleanup</h3>
                <p>Efficient removal of fallen trees, limbs, and debris after storms or for general property safety.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

          {/* Service 7: Stump Grinding */}
          <div className="service-card">
            <div className="service-card-bg relative overflow-hidden">
              <Image 
                src="/images/IMG_0111.jpeg" 
                alt="Stump Grinding" 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="service-card-label">
              <h3>Stump Grinding</h3>
            </div>
            <div className="service-card-overlay">
              <div className="overlay-content">
                <i className="fa-solid fa-gear"></i>
                <h3>Stump Grinding</h3>
                <p>Complete removal of unsightly stumps to clear the way for new landscaping or safe mowing transitions.</p>
                <a href="#contact" className="btn btn-small">Book Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
