import { useEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js";
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([
        ".greet",
        ".fullname",
        ".image",
        ".desc",
        ".typed h1",
        ".typed .span",
        ".buttons"
      ], {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typedElement = document.getElementById("typed-text");
    if (typedElement) {
      const typed = new Typed("#typed-text", {
        strings: ["ML ENTHUSIAST", "DESIGNER", "CREATIVE", "EXPLORER", "PROBLEM-SOLVER", "INNOVATOR"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <div ref={heroRef} className="z-10 hero">
      <div className="content relative z-1000 flex justify-center items-center h-full text-white">
        <div className="hero1 h-[86vh] overflow-hidden">
          <section className="text-white body-font" id='home'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-[90vw]">
              <div className="lg:flex-grow w-[40vw] lg:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center herodesc">
                <div className="first-section">
                  <h3 className="greet title-font sm:text-1xl text-1xl mb-4 font-medium">HELLO! MY NAME IS</h3>
                  <div className="name text-3xl">
                    <h1 className="fullname">AKSHAT JOSHI</h1>
                    <h3 className="text-1xl desc text-white">Bringing ideas to life with code. Clean, efficient, and user-focused development for web and beyond.</h3>
                  </div>
                </div>

                <div className="text-3xl typed">
                  <h1>DEVELOPER</h1>
                  <div className="span">
                    + <span id="typed-text"></span>
                  </div>
                </div>

                <div className="flex justify-center gap-10 buttons z-1000">
                  <a
                    href="./Akshat_Joshi_Resume.pdf"
                    download="Akshat_Joshi_Resume.pdf"
                    className="btnn relative z-10 cursor-pointer inline-block text-center"
                  >
                    Resume
                  </a>

                  <a
                    href="#projects"
                    className="btnn relative z-10 cursor-pointer inline-block text-center"
                  >
                    Projects
                  </a>
                </div>
              </div>
              <div className="image lg:max-w-lg lg:w-full pr-15 w-[80vw]">
                <img className="object-cover object-center w-[100vw] h-[67vh] neon-img glow-soft" alt="hero" src="/hero3.jpg"></img>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
