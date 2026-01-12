import './Projects.css'
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiMongodb, SiPython, SiJavascript, SiFirebase, SiDart, SiCss3, SiFastapi, SiGooglegemini, SiThemoviedatabase } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FiMove, FiLayers } from 'react-icons/fi'
import { MdAnimation, MdOutlineStorage } from 'react-icons/md';
import FadeInWhenVisible from './FadeInWhenVisible';

const projectsData = [
  {
    title: "Foundry - AI Startup Advisor",
    description: "Developed a RAG-based AI startup advisor that provides context-aware insights using real-world startup case studies.",
    image: "/Foundry.png",
    techStack: ["LangChain", "FastAPI", "React", "RAG", "ChromaDB", "Firebase", "Gemini/Groq API"],
    github: "https://github.com/Ackjosh/Foundry",
  },
  {
    title: "Real-time Fuel Availability System",
    description: "Architected a real-time fuel tracking system (app and website) with live station data and maps using Firebase, Firestore, and OpenStreetMap APIs.",
    image: "/Screenshot (34).png",
    techStack: ["React", "Node.js", "Tailwind", "TypeScript", "Firebase", "Dart"],
    github: "https://github.com/Ackjosh/RFAS",
  },
  {
    title: "Flick Nest",
    description: "Developed a full-stack media management app featuring robust authentication, dynamic watchlists, and advanced API error handling.",
    image: "/Screenshot 2025-09-16 232855.png",
    techStack: ["React", "Node.js", "JavaScript", "MongoDB", "Firebase", "TMDB API"],
    github: "https://github.com/Ackjosh/Flick_Nest",
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio to showcase projects, expertise, and connect with me.",
    image: "/Screenshot (33).png",
    techStack: ["TypeScript", "React", "Lenis", "GSAP", "Tailwind"],
    github: "https://github.com/Ackjosh/Portfolio",
  },
  {
    title: "Spotify Clone",
    description: "Developed a React frontend for a Spotify clone with full playback controls, album switching, and state persistence using local storage.",
    image: "/Screenshot 2025-09-16 232950.png",
    techStack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Ackjosh/Spotify_Clone",
  },
];

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="text-cyan-400 w-5 h-5" />,
  Tailwind: <SiTailwindcss className="text-blue-400 w-5 h-5" />,
  TypeScript: <SiTypescript className="text-blue-600 w-5 h-5" />,
  "Node.js": <SiNodedotjs className="text-green-500 w-5 h-5" />,
  MongoDB: <SiMongodb className="text-green-400 w-5 h-5" />,
  JavaScript: <SiJavascript className="text-yellow-400 w-5 h-5" />,
  Python: <SiPython className="text-yellow-300 w-5 h-5" />,
  "LangChain": <SiPython className="text-purple-400 w-5 h-5" />,
  "OpenAI API": <SiPython className="text-white w-5 h-5" />,
  "Chart.js": <SiJavascript className="text-yellow-400 w-5 h-5" />,
  Firebase: <SiFirebase className="text-yellow-400 w-5 h-5" />,
  Dart: <SiDart className="text-blue-400 w-5 h-5" />,
  "TMDB API": <SiThemoviedatabase className="text-cyan-400 w-5 h-5" />,
  "Lenis": <FiMove className="text-yellow-400 w-5 h-5" />,
  "GSAP": <MdAnimation className="text-purple-400 w-5 h-5" />,
  CSS: <SiCss3 className="text-blue-400 w-5 h-5" />,
  "Gemini/Groq API": <SiGooglegemini className="text-white w-5 h-5" />,
  "FastAPI": <SiFastapi className="text-blue-400 w-5 h-5" />,
  "RAG": <FiLayers className="text-green-400 w-5 h-5" />,
  "ChromaDB": <MdOutlineStorage className="text-blue-400 w-5 h-5" />,
};

const Projects = () => {
  return (
    <div className="w-full relative flex flex-col gap-6 pjt px-8">
      <FadeInWhenVisible>
      <h1 className="info text-center text-white">Projects</h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
        Here you'll find a selection of my recent work, ranging from web development to GenAI experiments.
      </p>
      </FadeInWhenVisible>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mx-auto">
        {projectsData.map((proj, idx) => (
          <FadeInWhenVisible>
          <div
            key={idx}
            className="bg-black rounded-xl h-[28rem] w-[25rem] flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h2 className="text-white text-xl font-semibold">{proj.title}</h2>
              <p className="text-gray-300 text-sm">{proj.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 hover:bg-[rgb(43,197,138)] hover:text-black transition-colors duration-300 cursor-pointer"
                  >
                    {techIcons[tech]} <span>{tech}</span>
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className='flex gap-2'>
              <h6 className='text-white gh'>Github :</h6>
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-white hover:text-[rgb(43,197,138)] transition-colors duration-300 text-xl"
              >
                <FaGithub />
              </a>
              </div>
            </div>
          </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  )
}

export default Projects
