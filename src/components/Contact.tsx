import { Mail, Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Contact = () => {
  return (
    <FadeInWhenVisible>
    <div className="w-full max-w-6xl px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-20">
      {/* Left Side */}
      
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-300 text-lg mb-6">
          Whether you have a question, want to collaborate, or just want to say hi,
          feel free to drop a message!
        </p>

        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akshatdjoshi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[rgb(43,197,138)] transition-colors"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://linkedin.com/in/akshat-joshi-17ab542b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[rgb(43,197,138)] transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>


      {/* Right Side: Contact Form */}
      
      <div className="flex-1 w-full">
        <form className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:border-[rgb(43,197,138)] outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:border-[rgb(43,197,138)] outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-xl bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:border-[rgb(43,197,138)] outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-medium bg-[rgb(230,220,190)] text-black hover:bg-[rgb(43,197,138)] transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </FadeInWhenVisible>
  );
};

export default Contact;
