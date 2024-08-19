import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Main.css";

const BestProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-cyan.vercel.app/api/v1/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);

  return (
    <div className="my-10">
      <p className="text-4xl font-bold italic text-center text-orange-500 my-8 border-b-orange-600 border-b-4 lg:w-1/4 lg:mx-auto pb-3">
        My Best Projects
      </p>

      <div
        data-aos="zoom-in-down"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {projects?.data?.slice(0, 2)?.map((project) => (
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
      <div className="text-center my-7">
        <button className="border-2 px-4 py-2 rounded local-btn text-white font-bold ">
          <Link to="/projects">See All Projects</Link>
        </button>
      </div>
    </div>
  );
};

export default BestProjects;
