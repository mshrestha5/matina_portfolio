import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/matinashrestha/">
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/25_matina/?next=%2F">
          <ImInstagram />
        </a>
        <a href="https://youtube.com/@matinashrestha9878">
          <AiFillYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Matina's Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
