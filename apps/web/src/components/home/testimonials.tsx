"use client";

import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Ryan Storm",
    role: "CEO at Ipsum",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    number: "01",
    quote:
      "Exceptional work, exceptional team. Montek consistently delivers top-notch results.",
  },
  {
    id: 2,
    name: "Elly Walker",
    role: "Manager at Lorem LTD",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    number: "02",
    quote:
      "Exceptional work, exceptional team. Montek consistently delivers top-notch results.",
  },
  {
    id: 3,
    name: "Graham Bolt",
    role: "Freelance Photographer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    number: "03",
    quote:
      "Exceptional work, exceptional team. Montek consistently delivers top-notch results.",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    number: "04",
    quote:
      "Exceptional work, exceptional team. Montek consistently delivers top-notch results.",
  },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-black text-4xl uppercase tracking-tighter">
            Testimonials
          </h2>
          <div className="flex h-10 w-10 items-center justify-center">
            <Star className="h-8 w-8 text-white" />
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
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                className="pl-4 md:basis-1/2 lg:basis-1/3"
                key={testimonial.id}
              >
                <div className="flex flex-col gap-6">
                  {/* Top Card */}
                  <div className="relative h-[280px] border border-neutral-800 bg-neutral-900/20 p-8 transition-colors duration-300 hover:bg-neutral-900/40">
                    <div className="flex flex-col gap-4">
                      <div className="relative h-16 w-16 overflow-hidden grayscale">
                        <Image
                          alt={testimonial.name}
                          className="object-cover"
                          fill
                          src={testimonial.image}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-white text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="mt-1 text-neutral-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="absolute right-6 bottom-4 select-none font-black text-6xl text-neutral-800/50">
                      {testimonial.number}
                    </div>
                  </div>

                  {/* Bottom Quote */}
                  <div className="flex gap-4 px-2">
                    <Quote className="h-8 w-8 shrink-0 fill-white/20 text-white" />
                    <p className="text-neutral-400 leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
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
