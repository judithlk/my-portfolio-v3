import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
   <main id="scroll-root" className="h-screen overflow-y-auto
    snap-y snap-mandatory
    scroll-smooth
    no-scrollbar scroll-pt-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
