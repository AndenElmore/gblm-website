import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Ground Breaker Land Management",
  description: "Privacy Policy for Ground Breaker Land Management. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="py-24 bg-white">
        <div className="container mx-auto px-5 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-[#2e5c33] mb-10 border-b pb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p>At Ground Breaker Land Management, we respect your privacy and are committed to protecting any personal information you may provide through our website. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
              <p>We collect information that you voluntarily provide to us when you fill out our contact form, including your name, email address, phone number, and service location. This information is used solely to provide you with requested quotes and services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and project requests.</li>
                <li>Provide estimates and coordinate land management services.</li>
                <li>Communicate updates regarding your project.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is never sold, traded, or otherwise transferred to outside parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>If you have any questions regarding this Privacy Policy, you may contact us at groundbreakerlandmanagement@gmail.com.</p>
            </section>
            
            <p className="text-sm text-gray-500 pt-10 italic">Last Updated: March 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
