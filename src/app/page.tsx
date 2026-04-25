import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
