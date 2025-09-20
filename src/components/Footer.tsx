import './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/Ackjosh" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/akshat-joshi-17ab542b9/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/ackjosh.27/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://x.com/akjo27" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  )
}

export default Footer
