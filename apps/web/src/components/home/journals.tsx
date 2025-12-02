"use client";

import Autoplay from "embla-carousel-autoplay";
import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const journals = [
  {
    id: 1,
    category: "Design",
    title: "Local Bites: Culinary Experiences Worldwide",
    href: "/" as const,
  },
  {
    id: 2,
    category: "Tech",
    title: "Training Triumphs: Athlete's Journey for Excellent race",
    href: "/" as const,
  },
  {
    id: 3,
    category: "Tutorials",
    title: "Beyond Books: Practical Learning Adventures",
    href: "/" as const,
  },
  {
    id: 4,
    category: "Coding",
    title: "Designing Tomorrow A Glimpse into Creative Innovations",
    href: "/" as const,
  },
  {
    id: 5,
    category: "Updates",
    title: "Behind the Scenes of the Digital Revolution",
    href: "/" as const,
  },
];

export default function Journals() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover bg-fixed py-20 text-white"
      style={{
        backgroundImage: "url('/assets/hero-bg-2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-black text-4xl uppercase tracking-tighter">
            Journal
          </h2>
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-white">
            <Menu className="h-6 w-6" />
          </div>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {journals.map((journal) => (
              <CarouselItem
                className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={journal.id}
              >
                <Link
                  className="group relative flex h-[380px] flex-col justify-between border border-neutral-800 bg-neutral-900/50 p-6 transition-colors duration-300 hover:bg-neutral-900"
                  href={journal.href}
                >
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <span className="mb-4 inline-block border border-neutral-700 px-3 py-1 text-neutral-400 text-xs uppercase tracking-wider transition-colors group-hover:border-white/50 group-hover:text-white">
                        {journal.category}
                      </span>
                      <h3 className="font-medium text-2xl text-neutral-200 leading-tight transition-colors group-hover:text-white">
                        {journal.title}
                      </h3>
                    </div>

                    <div className="flex justify-end">
                      <ArrowUpRight className="h-6 w-6 text-neutral-500 transition-colors group-hover:text-white" />
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black/20" />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-neutral-800 bg-black text-white hover:bg-neutral-900 hover:text-white" />
            <CarouselNext className="-right-12 border-neutral-800 bg-black text-white hover:bg-neutral-900 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
