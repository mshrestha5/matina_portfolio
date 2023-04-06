import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/matinashrestha/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mshrestha5"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        {/* <a href='https://www.linkedin.com' target="_blank" rel="noreferrer"></a> */}
      </div>
    </div>
  );
};

export default HeaderSocial;
