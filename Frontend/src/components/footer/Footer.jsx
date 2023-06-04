import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mbianou Bradon
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
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
        <a href="https://www.linkedin.com/in/mbianou-bradon/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mbianou-bradon" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/romeo.mbianou" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/Mbianou_Bradon" target="_blank" rel="noreferrer">
        <CgTwitter />
      </a>
      </div>

      <div className="footer__copyright">
        <small>Copyright 2023&copy; Mbianou Bradon. All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;