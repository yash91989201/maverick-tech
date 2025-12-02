import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "GLOSSY",
    category: "Branding",
    image: "/assets/project-1.jpg",
    href: "/projects/glossy",
  },
  {
    title: "BOXKIT",
    category: "Branding",
    image: "/assets/project-2.jpg",
    href: "/projects/boxkit",
  },
  {
    title: "LANDSCAPE",
    category: "Branding",
    image: "/assets/project-3.jpg",
    href: "/projects/landscape",
  },
  {
    title: "BRANDO",
    category: "Branding",
    image: "/assets/project-4.jpg",
    href: "/projects/brando",
  },
  {
    title: "TABZEN",
    category: "Branding",
    image: "/assets/project-5.jpg",
    href: "/projects/tabzen",
  },
  {
    title: "MINIO",
    category: "Branding",
    image: "/assets/project-6.jpg",
    href: "/projects/minio",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-black px-8 py-20 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              className="group block border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30"
              href={project.href}
              key={index.toString()}
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden p-6">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fill={true}
                    src={project.image}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <p className="mb-2 text-white/60 text-xs uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="font-bold text-white text-xl uppercase tracking-wide transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
