import React, { useEffect } from 'react'
import pdf from "../pdf/MD ABDUL AHAD _218R1A05A2.pdf";
import hero from "./data/Hero.json"

// import Typed from "typed.js";
import { useRef} from "react";

const Home = () => {
  const textRef = useRef(null);
  const text = "I'm Mohammed Abdul Ahad";
  const typingSpeed = 100; // Adjust typing speed as needed
  const deleteSpeed = 50;  // Adjust deletion speed as needed
  const pauseDelay = 1000; // Delay after typing completes

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = textRef.current.innerText;
      const currentLength = currentText.length;

      if (!isDeleting) {
        // Typing phase
        if (index < text.length) {
          textRef.current.innerText = text.substring(0, index + 1);
          index++;
          setTimeout(type, typingSpeed);
        } else {
          // After typing completes, pause before deleting
          setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseDelay);
        }
      } else {
        // Deleting phase
        if (currentLength > 0) {
          textRef.current.innerText = text.substring(0, currentLength - 1);
          setTimeout(type, deleteSpeed);
        } else {
          // After deleting completes, reset for typing again
          index = 0;
          isDeleting = false;
          setTimeout(type, typingSpeed);
        }
      }
    };

    // Start typing animation
    type();
  }, []);
  return (
    <>
      <div className='container home'>
        <div className='left'
        data-aos = "fade-up-right" 
        data-aos-duration = "1000" >
          <h2>Hi,👋<h2 ref={textRef}>i</h2>,an undergraduate student with a passion for full stack development and a love for learning new things!</h2>

          <a href={pdf}
          download= "Resume.pdf" 
          className='btn btn-outline-warning my-3'>Resume
          </a>
        </div>

        <div className='right'>
        <div className='img'
        data-aos = "fade-up-left" 
        data-aos-duration = "1000">
          <img src={`/assets/${hero.imgSrc}`} alt='heroImg'/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home