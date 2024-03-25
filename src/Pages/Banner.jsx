import React from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
AOS.init();

const Banner = () => {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="mt-14 md:mt-28" data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <div data-aos="fade-left" className="p-3 space-y-9">
          <p className="text-3xl lg:text-5xl italic mt-20 lg:mt-5">
            Hello! I'm
          </p>
          <p className="text-4xl lg:text-7xl italic">MD EMON SHEIKH</p>
          <h1 className="text-2xl ">
            {" "}
            <span>
              <Typewriter
                words={[
                  "Software Developer",
                  "Web Developer",
                  "Frontend Developer",
                  "MERN-Stack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
          <p>
            I am a skilled web developer proficient in React, Express.js,
            MongoDB, and Node.js. With a passion for creating dynamic and
            efficient web solutions, I thrive in the digital realm
          </p>
          <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold">
            <a href="https://drive.google.com/file/d/1pGO7eUCXN4tzTtQEI6XWl2xtoEnsaVHO/view?usp=sharing">
              Get Resume
            </a>
          </button>
        </div>
        <div
          className="banner-img-container rounded-full md:ms-10"
          data-aos="fade-left"
        >
          <img
            className="banner-img"
            src="https://i.ibb.co/CMX6Rb9/emon2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
