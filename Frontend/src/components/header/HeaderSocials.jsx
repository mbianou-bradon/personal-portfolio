import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg"
import { FaFacebookF } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;