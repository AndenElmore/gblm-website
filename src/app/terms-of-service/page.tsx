import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Ground Breaker Land Management",
  description: "Terms of Service for Ground Breaker Land Management.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="py-24 bg-white">
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-[#2e5c33] mb-10 border-b pb-6">Terms of Service</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>By accessing our website and requesting services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using this site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Estimates</h2>
              <p>All estimates and quotes provided through our website or via telephone are preliminary and subject to change based on in-person field assessments of terrain, soil conditions, and debris volume.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p>Property owners are responsible for identifying property lines and marking any underground utilities, irrigation systems, or septic tanks before heavy equipment operations begin.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
              <p>Ground Breaker Land Management is fully insured. However, we are not liable for damage to unmarked underground structures or features not explicitly disclosed by the owner prior to the commencement of work.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Georgia.</p>
            </section>
            
            <p className="text-sm text-gray-500 pt-10 italic">Last Updated: March 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
