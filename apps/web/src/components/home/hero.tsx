import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-svh w-full flex-col overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      {/* Overlay gradient for better text visibility if needed */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
        <h1 className="select-none text-center font-black text-[12vw] text-white uppercase leading-[0.85] tracking-tighter drop-shadow-2xl">
          Creative
          <br />
          Space
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 w-full px-8 pb-8 md:px-16 md:pb-12">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-3">
          {/* Left Text */}
          <div className="text-left">
            <div className="mb-4 h-0.5 w-16 bg-fuchsia-700" />
            <p className="max-w-xs font-light text-lg text-white/90 md:text-xl">
              Our visionary team crafts transformative experiences
            </p>
          </div>

          {/* Center Scroll Indicator */}
          <div className="flex flex-col items-center justify-end pb-4">
            <Link
              className="group flex cursor-pointer flex-col items-center gap-2"
              href="#projects"
            >
              <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/30 backdrop-blur-sm transition-colors duration-300 group-hover:border-white">
                <ArrowDown className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-y-1" />
              </div>
              <span className="text-[10px] text-white/60 uppercase tracking-[0.2em] transition-colors group-hover:text-white">
                Work
              </span>
            </Link>
          </div>

          {/* Right Text */}
          <div className="flex flex-col items-end text-right">
            <p className="mb-4 max-w-xs text-right font-light text-lg text-white/90 md:text-xl">
              Enhancing potential and driving prosperity.
            </p>
            <div className="h-px w-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
