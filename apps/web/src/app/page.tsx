import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import Journals from "@/components/home/journals";
import Testimonials from "@/components/home/testimonials";
import Stats from "@/components/home/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Journals />
      <Testimonials />
      <Stats />
    </main>
  );
}
