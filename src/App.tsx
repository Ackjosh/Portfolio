import { useEffect, useState, useRef } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { animatePageIn } from './animations';
import ReactLenis from 'lenis/react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Beams from './components/ui/Beams';
import StaggeredMenu from './components/ui/StaggeredMenu';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const containerRef = useRef(null);

  useEffect(() => {
    animatePageIn();
  }, [currentPage]);

  const menuItems = [
    { label: 'Home', link: '#home', ariaLabel: 'Go to home page' },
    { label: 'About', link: '#about', ariaLabel: 'Learn about us' },
    { label: 'Projects', link: '#projects', ariaLabel: 'View projects' },
    { label: 'Contact', link: '#contact', ariaLabel: 'Get in touch' },
  ];

  return (
    <ReactLenis root>

      {/* Staggered Menu (always visible & on top) */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={[
          { label: 'GitHub', link: 'https://github.com/Ackjosh' },
          { label: 'LinkedIn', link: 'https://linkedin.com/in/akshat-joshi-17ab542b9/' },
        ]}
        displaySocials
        displayItemNumbering
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen
        logoUrl="/image.png"
        colors={['rgb(43, 197, 138)', 'rgb(230, 220, 190)']}
        accentColor="rgb(43, 197, 138)"
        className="fullscreen-menu"
      />

      {/* Beams Background */}
      <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={4}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Navbar */}
      <header className="hder relative z-50 w-full flex justify-center p-4">
        <Navbar />
      </header>

      {/* Page Content */}
      <main
        data-scroll-container
        ref={containerRef}
        className="main-screen relative z-10 w-full flex flex-col overflow-visible"
      >
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full">
        <Footer />
      </footer>

    </ReactLenis>
  );
}

export default App;
