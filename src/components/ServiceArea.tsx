import Link from "next/link";

export default function ServiceArea() {
  const cities = [
    "Bogart", "Watkinsville", "Athens", "Statham", "Bishop", 
    "North High Shoals", "Farmington", "Winterville", "Monroe",
    "Winder", "Madison", "Eatonton", "Greensboro", "Milledgeville", "Covington"
  ];

  return (
    <section className="py-48 bg-[#0c0c0c] text-white border-b border-gray-900">
      <div className="container mx-auto px-5 text-center">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-bold font-montserrat mb-4 uppercase tracking-[0.2em]" style={{ color: '#ffffff', opacity: 1 }}>
            Proudly Serving
          </h2>
          <div className="w-24 h-1 bg-[#d4a017] mx-auto mb-10"></div>
          <p className="text-2xl md:text-3xl text-white font-medium tracking-widest uppercase opacity-90">
            Oconee County & A 50-Mile Radius
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto py-10">
          {cities.map((city) => (
            <Link 
              key={city} 
              href={`/locations/${city.toLowerCase().replace(/ /g, '-')}`}
              className="px-10 py-5 border-2 border-[#d4a017] text-[#d4a017] font-bold rounded-full hover:bg-[#d4a017] hover:text-black transition-all duration-300 text-xl md:text-2xl hover:scale-110 shadow-lg"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
