import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Mobile App\nDevelopment",
    icon: "/assets/service-1.png",
    href: "/services/mobile-app-development",
  },
  {
    title: "Video Production &\nEditing",
    icon: "/assets/service-2.png",
    href: "/services/video-production",
  },
  {
    title: "Print & Graphic\nDesign",
    icon: "/assets/service-3.png",
    href: "/services/graphic-design",
  },
  {
    title: "Strategic Branding\nServices",
    icon: "/assets/service-4.png",
    href: "/services/branding",
  },
];

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-background to-chart-1 px-8 py-20 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex items-center gap-3">
          <h2 className="mb-0 font-bold text-2xl uppercase tracking-wider">
            Services
          </h2>
          <div className="relative h-8 w-8">
            <Image
              alt="Services Icon"
              src="/assets/services-icon.png"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative flex h-48 cursor-pointer items-center justify-between rounded-sm border border-white/20 p-8 transition-colors duration-300 hover:bg-white/5"
            >
              <h3 className="whitespace-pre-line font-light text-2xl leading-tight md:text-3xl">
                {service.title}
              </h3>

              <div className="relative h-16 w-16 shrink-0">
                <Image
                  alt={service.title.replace("\n", " ")}
                  src={service.icon}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
