import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog | Land Management Tips & News | GBLM",
  description: "Stay updated on the latest land management tips, grading advice, and news from Ground Breaker Land Management.",
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="py-24 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-[#2e5c33] mb-6 uppercase">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert advice and recent projects from the Ground Breaker team.</p>
          </div>
          
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-[#d4a017] flex items-center justify-center rounded-full mb-8">
              <i className="fa-solid fa-hourglass-start text-3xl text-white"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-md">We're currently preparing high-quality content to help you better manage and prepare your land. Check back soon for our first posts!</p>
            <a href="/" className="btn mt-10">Back to Home</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
