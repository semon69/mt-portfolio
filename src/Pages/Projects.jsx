import React from "react";
import textEditor from "../assets/images/text editor.png";
import "./Main.css";

const Projects = () => {
  return (
    <div className="pt-16 md:pt-0 p-2">
      <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">
        All Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl  my-16"
        >
          <div className="image image5"></div>
          <div className="p-5">
            <p className="text-3xl pb-3 font-semibold">
              Flower Management Dashboard
            </p>
            <p className="font-semibold py-3">
              This is a Flower Management Dashboard. Allows users to securely
              log in, enables new users to create accounts using JWT. Overview
              of flowers and sales. Create, Update, Delete, and Edit products.
              Create flowers variants. Log sales transactions with relevant
              details. View and track historical sales data. Users can search
              for a flower and initiate a sale. Removal of product from
              inventory when quantity reaches zero. You can visit as admin to
              see admin features, email: emon@gmail.com. Password: 1234
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/flower-management-client">
                  Github Client Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/flower-management-server">
                  Github Server Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://flower-management-client-kappa.vercel.app/">
                  Live Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl  my-16"
        >
          <div className="image image1"></div>
          <div className="p-5">
            <p className="text-3xl pb-3 font-semibold">
              Elite Export Sports Academy
            </p>
            <p className="font-semibold py-3">
              This is a sports academy. You can find your favorite sports to
              learn. There are many instructor to teach you. You can select
              multiple sports and pay for your selected sports. Card payment
              system implemented for online payment using Stripe. User can see
              their enroll classes after payment. There are 3 different dashboard
              for student, instructor and admin. Instructor can add classes. If
              admin approved these classes it will show in classes page. An
              admin can set users role.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/Elite-export-client">
                  Github Client Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/Elite-export-server-">
                  Github Server Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://sports-acedemy.web.app/">Live Link</a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl my-16"
        >
          <div className="image image2"></div>
          <div className="p-5">
            <p className="text-3xl pb-3 font-semibold">Super Hero Toys</p>
            <p className="font-semibold py-3">
              This a toy shop, specially for those who love super heros. They
              can find there favorite super hero character toy in this shop.
              Everyone has to login to see toy details. After login, they can
              add there own toys. They can shop by category like Avengers, Star
              wars are different pages. They can get discount on top trending
              toys.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/Super-hero">
                  Github Client Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/super-hero-server">
                  Github Server Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://super-heros-27f87.web.app/">Live Link</a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl my-16"
        >
          <div className="image image3"></div>
          <div className="p-5">
            <p className="text-3xl pb-3 font-semibold">Let's Go</p>
            <p className="font-semibold py-3">
              Discover your dream destinations, find the perfect hotel, and book
              your flights seamlessly with us. 'Let's Go' empowers travelers to
              explore the world effortlessly. Whether you crave adventure,
              cultural immersion, or relaxation, our platform provides a diverse
              array of choices. Create personalized itineraries, join a vibrant
              travel community. We prioritize your safety and security.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/team-project-lets-go">
                  Github Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://team-project-lets-go.vercel.app/">Live Link</a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl my-16"
        >
          <div className="image image4"></div>
          <div className="p-5">
            <p className="text-2xl pb-3 font-semibold">French Chef's</p>
            <p className="font-semibold py-3">
              This a website of french chef's. You can find your favorite chef
              in your website. Look at our menu. Various kind of europian food
              you can get at cheap price. You can see blog page where we
              answered your frequently asked question. You can register or login
              using your email and password. It gives you error message if
              something doesn't match our policy.
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/chef-reciepe-client">
                  Github Client Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/cher-recipe-server">
                  Github Server Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://chef-recipe-hunter-f7444.web.app/">
                  Live Link
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="border-2 rounded shadow-xl my-16"
        >
          <img className="h-[380px]" src={textEditor} alt="" />
          <div className="p-5">
            <p className="text-2xl pb-3 font-semibold">Ms-Word-Lite</p>
            <p className="font-semibold py-3">
              It is a text editor build by me. You can say it, simple clone
              project of ms word. You can bold, italic, underline text. Here is
              the option of text alignment like text left, text center, text
              right. Also here are the option for text sizing, text color and
              uppercase or lowercase. The technology I used there HTML,
              Bootstrap and JavaScript(DOM).
            </p>
            <div className="flex justify-between">
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://github.com/semon69/ms-word-lite/tree/main">
                  Github Link
                </a>
              </button>
              <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
                <a href="https://64898ff12d8f1605d461dba1--friendly-pavlova-445001.netlify.app/">
                  Live Link
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
