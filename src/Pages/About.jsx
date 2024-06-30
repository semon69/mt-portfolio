import React from "react";
import Lottie from "lottie-react";
import anim from "../../public/ani.json";

const About = () => {
  return (
    <div data-aos="fade-up">
      <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">
        About Me
      </h2>
      <div className="lg:flex gap-8 p-2">
        <div
          data-aos="fade-right"
          className="lg:w-1/2 w-full border-2 border-black"
        >
          <Lottie animationData={anim} loop={true} />
        </div>
        <div data-aos="fade-left" className="lg:w-1/2 space-y-2">
          <p>
            Hi there! I'm a full-stack developer with a Bachelor's degree in
            Computer Science and Engineering (CSE). I specialize in React.js,
            Next.js, Node.js, MongoDB, and PostgreSQL.
            <br /> <br />
            I'm skilled in creating dynamic and responsive web applications
            using React.js and Next.js, making them visually appealing and
            efficient. My experience extends to server-side development with
            Node.js and Express.js, where I build robust and scalable backend
            systems.
            <br />
            <br />
            {/* JavaScript is my go-to language for both frontend and backend development. I use React.js and Next.js to build interactive user interfaces and manage complex application states. On the server side, I work with Node.js and Express.js to create efficient server applications and RESTful APIs. I'm proficient in working with both MongoDB and PostgreSQL, managing data effectively for various web applications.
            <br /> <br /> */}
            Currently, I work as a backend developer at Diligent Soft It, where
            I continue to hone my skills and contribute to various projects
            across the full stack.
            <br />
            <br />I have worked on several web development projects, both
            independently and in collaboration with others. These experiences
            have honed my skills and provided me with practical knowledge in the
            field.
          </p>
          <br />
          <p className="text-xl font-bold text-orange-500">Education:</p>
          <p>BSc in Computer Science and Engineering</p>
          <p>Atish Dipankar University of Science and Technology</p>
          <p>CGPA : {"  "} 3.47 </p>
          <p className="text-xl font-bold text-orange-500">Certification:</p>
          <p>Complete Web Development With Jhanker Mahbub (Level 1)</p>
          <p>Complete Web Development With Programming Hero ( Level 2)</p>
        </div>
      </div>
    </div>
  );
};

export default About;
