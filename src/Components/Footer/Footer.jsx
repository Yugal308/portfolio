import React from 'react'
import {IoLogoTwitter} from 'react-icons/io'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
        <a href="#" className='footer__logo'>Yugal Verma</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="http://facebook.com"><FaFacebook /></a>
          <a href="http://instagram.com"><FiInstagram /></a>
          <a href="http://twitter.com"><IoLogoTwitter/></a>
        </div>
        <div className="footer_copy">
          <small>&copy; Yugal Verma. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer