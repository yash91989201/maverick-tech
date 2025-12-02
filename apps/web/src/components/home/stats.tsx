import { Send, Target } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    id: 1,
    value: "235+",
    label: "Finished Projects",
  },
  {
    id: 2,
    value: "25+",
    label: "Team Members",
  },
  {
    id: 3,
    value: "138+",
    label: "Happy Customers",
  },
  {
    id: 4,
    value: "42+",
    label: "Loyal Partners",
  },
  {
    id: 5,
    value: "15,628+",
    label: "Cups of Coffee",
  },
];

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover bg-fixed py-20 text-white"
      style={{
        backgroundImage: "url('/assets/hero-bg-3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-black text-4xl uppercase tracking-tighter">
            Stats
          </h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
            <Target className="h-6 w-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 border-neutral-800 border-t border-l md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              className="group relative border-neutral-800 border-r border-b bg-neutral-900/10 p-10 backdrop-blur-sm transition-colors hover:bg-neutral-900/30"
              key={stat.id}
            >
              {/* Decorative dot */}
              <div className="-top-1.5 -right-1.5 absolute h-3 w-3 rounded-full bg-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-2 font-bold text-5xl tracking-tight">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="group relative flex flex-col justify-center overflow-hidden border-neutral-800 border-r border-b bg-linear-to-br from-purple-900 to-pink-600 p-10">
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />

            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-3">
                <Send className="h-6 w-6" />
                <span className="font-bold text-2xl uppercase tracking-tight">
                  Contact
                </span>
              </div>
              <Link
                className="block text-sm text-white/80 uppercase tracking-wider hover:text-white"
                href="/contact"
              >
                Get A Quote For Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
