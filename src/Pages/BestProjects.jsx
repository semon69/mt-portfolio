import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const BestProjects = () => {
  return (
    <div className="my-10">
      <p className="text-4xl font-bold italic text-center text-orange-500 my-8 border-b-orange-600 border-b-4 lg:w-1/4 lg:mx-auto pb-3">
        My Best Projects
      </p>

      <div
        data-aos="zoom-in-down"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        <div className="border-2 border-black rounded shadow-xl">
          <div className="image image1">
            {/* <img className='h-[380px]' src="https://i.ibb.co/QKZsFys/la-masia.png" alt="" /> */}
          </div>
          <div className="p-5">
            <p className="text-2xl pb-3 font-semibold">
              La Masia Sports Academy
            </p>
            <p className="font-semibold py-3">
              This is a sports academy. You can find your favorite sports to
              learn. There are many instructor to teach you. You can select
              multiple sports and pay for your selected sports. There are 3
              different dashboard for student, instructor and admin. Instructor
              can add classes. If admin approved these classes it will show in
              classes page. An admin can set users role.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://github.com/semon69/La-Masia-Client-">
                  Github Client
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://github.com/semon69/La-Masia-server-">
                  Github Server
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://sports-acedemy.web.app/">Live Link</a>
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 border-black rounded shadow-xl">
          <div className="image image2"></div>
          <div className="p-5">
            <p className="text-2xl pb-3 font-semibold">Super Hero Toys</p>
            <p className="font-semibold py-3">
              This a toy shop, specially for those who love super heros. They
              can find there favorite super hero character toy in this shop.
              Everyone has to login to see toy details. After login, they can
              add there own toys. They can shop by category like Avengers, Star
              wars are different pages. They can get discount on top trending
              toys.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://github.com/semon69/Super-hero">
                  Github Client
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://github.com/semon69/super-hero-server">
                  Github Server
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold text-sm md:text-base">
                <a href="https://super-heros-27f87.web.app/">Live Link</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-7">
        <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
          <Link to="/projects">See All Projects</Link>
        </button>
      </div>
    </div>
  );
};

export default BestProjects;
