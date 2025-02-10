import React from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import { Link } from "react-router-dom";
AOS.init();

const Banner = () => {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="mt-14 md:mt-24" data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <div data-aos="fade-left" className="p-3 space-y-6">
          <p className="text-3xl lg:text-4xl italic mt-20 lg:mt-5">
            Hello! I'm
          </p>
          <p className="text-4xl lg:text-6xl italic">MD EMON SHEIKH</p>
          <h1 className="text-2xl ">
            {" "}
            <span>
              <Typewriter
                words={["Software Engineer", "Full-Stack Developer"]}
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
            I am a skilled Full Stack developer proficient in React, NextJs,
            MongoDB, PostgreSQL, and Node.js. With a passion for creating
            dynamic and efficient web solutions, I thrive in the digital realm
          </p>
          <p className="italic">
            Currently working as a Full Stack developer at{" "}
            <span className="text-orange-500 font-bold text-xl">
              <a
                href="https://standard-insights.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Standard Insights
              </a>
            </span>
            .
          </p>
          <div className="flex gap-3">
            <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold">
              <Link to={"/projects"}>Explore Project</Link>
            </button>
            <button className="border-2 px-4 py-2 rounded text-orange-500 font-bold">
              <a href="https://drive.google.com/file/d/1kTVBL1cLvxhpea8pYQHCwF-ne4TzAvub/view?usp=sharing">
                View Resume
              </a>
            </button>
          </div>
        </div>
        <div
          className="banner-img-container rounded-full md:ms-28"
          data-aos="fade-left"
        >
          <img
            className="banner-img ms-10 rounded-full"
            // src="https://i.ibb.co/CMX6Rb9/emon2.png"
            src="https://i.ibb.co.com/BB6Dcsg/Profile1-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
