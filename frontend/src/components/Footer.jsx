import './Footer.css'

//router
import {Link} from 'react-router-dom'

//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer id='footer'>
      <p>ReactGram &copy; 2024</p>
      <p className='my-name'>By Davidson Pacifico</p>
      <div className="social-network">
      <Link to='https://www.linkedin.com/in/davidson-pacifico/' target='_blank'><FaLinkedin /></Link>
      <Link to='https://github.com/magnata19' target='_blank'><FaGithub /></Link>
      <Link to='https://www.instagram.com/_dev.dave_/' target='_blank'><FaInstagram /></Link>
      </div>
      </footer>
    </div>
  )
}

export default Footer