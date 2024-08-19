import React, { useEffect, useState } from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-cyan.vercel.app/api/v1/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);
  return (
    <div className="pt-16 md:pt-0 p-2">
      <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 mt-10">
        All Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects?.data?.map((project) => (
          <div
            key={project?._id}
            data-aos="zoom-in-down"
            className="border-2 rounded shadow-xl  my-5"
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(${project?.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="p-5">
              <p className="text-3xl pb-4 font-semibold">{project?.title}</p>

              <p className="pb-4">
                {" "}
                <span className="text-xl font-semibold text-orange-500">
                  Technology Used:
                </span>{" "}
                {project?.tech}
              </p>

              <div className=" flex justify-end">
                <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold">
                  <NavLink to={`/projects/${project?._id}`}>
                    View Details
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
