import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Stats />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
