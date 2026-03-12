export default function Reviews() {
  const reviews = [
    {
      name: "John D.",
      location: "Athens, GA",
      text: "Ground Breaker Land Management did an incredible job clearing our acreage. Professional, on time, and the results exceeded our expectations. Highly recommend!",
    },
    {
      name: "Sarah W.",
      location: "Watkinsville, GA",
      text: "Very professional and efficient. They regraded our entire property and the new driveway looks absolutely amazing. Will definitely be calling them again.",
    },
    {
      name: "Michael T.",
      location: "Bogart, GA",
      text: "Prompt and fair-priced. We had a ton of downed trees after a storm, and they cleaned up the storm debris safely and quickly. Like it was never there!",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2e5c33] mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#d4a017]">
              <div className="flex text-[#d4a017] mb-4 text-xl">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <strong className="block text-gray-900">{review.name}</strong>
                <span className="text-sm text-gray-500">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
