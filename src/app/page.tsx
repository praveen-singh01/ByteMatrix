import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ByteMatrix Software Solution | Software Development Experts",
  description: "ByteMatrix Software Solution offers expert frontend and backend development services. Specializing in full stack development projects and contract-based development.",
};

export default function Home() {
  return (
    <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <article>
        <header>
          <Hero />
        </header>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Footer />
      </article>
    </main>
  );
}
