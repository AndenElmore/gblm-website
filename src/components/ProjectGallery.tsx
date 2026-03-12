import Image from "next/image";

export default function ProjectGallery() {
  const projects = [
    { src: "/images/IMG_0013.JPG", alt: "Land Clearing Project" },
    { src: "/images/IMG_0026.JPG", alt: "Site Grading in Progress" },
    { src: "/images/IMG_0019.JPG", alt: "Driveway Access Road" },
    { src: "/images/IMG_0085.jpeg", alt: "Field Bush Hogging" },
    { src: "/images/IMG_0012.JPG", alt: "Seeding Preparation" },
    { src: "/images/IMG_0018.JPG", alt: "Tree Cleanup Equipment" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2e5c33] mb-4">Project Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See the difference heavy equipment and professional expertise can make. From overgrown, raw land to perfectly cleared and graded sites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <div key={idx} className="relative h-64 w-full rounded-lg overflow-hidden group shadow-sm">
              <Image 
                src={project.src} 
                alt={project.alt} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold">{project.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
