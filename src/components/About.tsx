// src/components/About.tsx
import './About.css';
import LogoLoop from './ui/LogoLoop';
import {
  SiReact, SiTypescript, SiTailwindcss, SiMysql, SiNodedotjs,
  SiExpress, SiMongodb, SiLeetcode, SiLangchain, SiCss3,
  SiJavascript, SiPython, SiHtml5,
  SiCodechef
} from 'react-icons/si';
import Education from './Education';

const techLogos = [
  { node: <SiReact className="text-white" />, title: "React" },
  { node: <SiMysql className="text-white" />, title: "MySQL" },
  { node: <SiNodedotjs className="text-white" />, title: "Node" },
  { node: <SiExpress className="text-white" />, title: "Express" },
  { node: <SiMongodb className="text-white" />, title: "MongoDB" },
  { node: <SiJavascript className="text-white" />, title: "JavaScript" },
  { node: <SiTailwindcss className="text-white" />, title: "Tailwind" },
  { node: <SiLeetcode className="text-white" />, title: "LeetCode" },
  { node: <SiCodechef className="text-white" />, title: "CodeChef"},
  { node: <SiLangchain className="text-white" />, title: "LangChain" },
  { node: <SiCss3 className="text-white" />, title: "CSS3" },
  { node: <SiTypescript className="text-white" />, title: "TypeScript" },
  { node: <SiPython className="text-white" />, title: "Python" },
  { node: <SiHtml5 className="text-white" />, title: "HTML5" },
];

export default function About() {
  return (
    <div className="max-w-7xl px-0 py-16 gap-20 flex flex-col abt">
      <h1 className='info'>About Me</h1>
      <div className="fsec flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-30 items-start">
        {/* LEFT COLUMN - profile + stats + CTAs */}
        <aside className="md:col-span-2 flex flex-col items-center md:items-start gap-1">
          <h3 className="text-white text-2xl font-semibold mt-4">Akshat Joshi</h3>
          <p className="text-gray-400 mt-1">Full Stack Developer • DSA • GenAI</p>

          <div className="w-full grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white/5 p-3 rounded text-center">
              <div className="text-xl text-white font-bold">5+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="bg-white/5 p-3 rounded text-center">
              <div className="text-xl text-white font-bold">300+</div>
              <div className="text-xs text-gray-400">DSA Problems</div>
            </div>
            <div className="bg-white/5 p-3 rounded text-center">
              <div className="text-xl text-white font-bold">2★</div>
              <div className="text-xs text-gray-400">CodeChef</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="/Akshat_Joshi_Resume.pdf"
              download
              className="px-4 py-2 rounded-md bg-[rgb(230,220,190)] text-black font-medium shadow-sm"
            >
              Resume
            </a>
            <a
              href="mailto:your-email@domain.com"
              className="px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/5"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 w-full">
            <h4 className="text-sm text-gray-400 uppercase mb-2">Top skills</h4>
            <div className="flex flex-wrap gap-2">
              {techLogos.slice(0, 9).map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md">
                  <span className="w-5 h-5">{t.node}</span>
                  <span className="text-sm text-white/90">{t.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex gap-5">
            <a className="text-white font-[Inter] socials hover:text-[rgb(43,197,138)]" href="https://github.com/Ackjosh" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-white font-[Inter] socials hover:text-[rgb(43,197,138)]" href="https://linkedin.com/in/akshat-joshi-17ab542b9/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </aside>

        {/* MAIN (center/right) - About text + LogoLoop */}
        <main className="md:col-span-3 relative top-3 left-5 gap-10 flex flex-col">
          <div className="bg-zinc-800/50 rounded-2xl p-7 gap-10 flex flex-col">
            <p className="text-gray-400 leading-relaxed text-lg font-[Playfair Display]">
              Hi, I'm Akshat! I'm a <strong className="text-white">Web Developer</strong> passionate about building intuitive and high-performance digital experiences with a solid foundation in <strong className="text-white">Data Structures and Algorithms</strong> with over 300 problems solved. I love learning new technologies and continuously improving my skills to deliver the best solutions. I have worked with technologies including <strong className="text-white">React, Node, MongoDB, TypeScript, MySQL</strong> and am exploring <strong className="text-white">LangChain</strong>. I also have a 2 star rating on CodeChef (max 1516). I'm excited about applications of <strong className="text-white">GenAI</strong> in industry grade projects. 
            </p>
            
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-2xl font-semibold">Experience :-</h2>
            <ul className="pl-3 exp">
              <li>- Worked with React, Node.js, Express, and MongoDB for full stack web apps.</li>
              <li>- Developed APIs and user authentication using TypeScript and JWT</li>
              <li>- Managed data and schemas with SQL (MySQL) and NoSQL databases.</li>
              <li>- Solved 300+ LeetCode problems, strengthening algorithms and data structures expertise.</li>
            </ul>
            </div>
          </div>
        </main>

      </div>

      <div className="mt-20 w-10xl">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={48}
          gap={70}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="gray-800"
          ariaLabel="Technology partners"
          className='logo-loop cursor-pointer'
          width={2000}
        />
      </div>

      <div className="edu">
        <Education />
      </div>
      </div> 
    </div>
  );
}
