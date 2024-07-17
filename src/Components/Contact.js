import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.linkedin.com/in/mohammed-abdul-ahad-5419b32a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_main" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/mdabdulahad9392?t=xkpTV9CgQk6P6Ls0101Ewg&s=08" target="_main" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.github.com/abdulahad93" target="_main" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:webdevmastery@gmail.com"
            target="_main"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;