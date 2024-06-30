import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    fetch("https://portfolio-server-cyan.vercel.app/api/v1/skill")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, [skills]);
  
  return (
    <div className="my-20">
      <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">
        My Skills
      </h2>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills?.data?.map((skill) => (
          <div className="text-center my-3" key={skill._id}>
            <div className="inline-flex justify-center items-center border bg-white w-44 h-44 rounded-full p-2 hover:scale-110">
              <img className="w-32 h-32 rounded-md" src={skill.image} alt="" />
            </div>
            <p className="text-2xl fw-bold pt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
