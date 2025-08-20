import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <Hero />
      <Section id="about" title="About Me" subtitle="A quick snapshot">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          I’m a MERN stack developer focused on building scalable, user‑centric web apps. I enjoy clean architecture, performance,
          and shipping features that solve real problems. I’m currently looking for challenging roles and internships to grow faster.
        </p>
      </Section>
      <Education />
      <Internship />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
