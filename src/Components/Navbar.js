import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='container nav_bar' data-aos="fade-down" data-aos-duration="1000">
      <div className='left nav_items'>ABDUL AHAD</div>
      <div className='right'>
        <ScrollLink to="home" spy={true} smooth={true} duration={200} className='nav_items' offset={-50}>Home</ScrollLink>

        <ScrollLink to="AboutMe" spy={true} smooth={true} duration={200} className='nav_items' offset={-50}>About Me</ScrollLink>

        <ScrollLink to="skills" spy={true} smooth={true} duration={200} className='nav_items' offset={-50}>Skills</ScrollLink>

        <ScrollLink to="projects" spy={true} smooth={true} duration={200} className='nav_items' offset={-50}>Projects</ScrollLink>

        <ScrollLink to="contact" spy={true} smooth={true} duration={200} className='nav_items' offset={-50}>Contact</ScrollLink>
      </div>
    </div>
  );
}

export default Navbar;
