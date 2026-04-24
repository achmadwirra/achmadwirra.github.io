import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
