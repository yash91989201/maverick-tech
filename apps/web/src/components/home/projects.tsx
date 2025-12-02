import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "GLOSSY",
    category: "Branding",
    image: "/assets/project-1.jpg",
    href: "/projects" as const,
  },
  {
    title: "BOXKIT",
    category: "Branding",
    image: "/assets/project-2.jpg",
    href: "/projects" as const,
  },
  {
    title: "LANDSCAPE",
    category: "Branding",
    image: "/assets/project-3.jpg",
    href: "/projects" as const,
  },
  {
    title: "BRANDO",
    category: "Branding",
    image: "/assets/project-4.jpg",
    href: "/projects" as const,
  },
  {
    title: "TABZEN",
    category: "Branding",
    image: "/assets/project-5.jpg",
    href: "/projects" as const,
  },
  {
    title: "MINIO",
    category: "Branding",
    image: "/assets/project-6.jpg",
    href: "/projects" as const,
  },
];

export default function Projects() {
  return (
    <section
      className="w-full bg-black px-8 py-20 text-white md:px-16"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              className="group block border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              href={project.href}
              key={index.toString()}
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden p-6">
                <div className="relative h-full w-full overflow-hidden rounded-sm">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill={true}
                    src={project.image}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <p className="mb-2 text-white/60 text-xs uppercase tracking-wider transition-colors duration-300 group-hover:text-white/80">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-xl uppercase tracking-wide transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <div className="h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
