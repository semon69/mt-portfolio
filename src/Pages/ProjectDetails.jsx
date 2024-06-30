import { useLoaderData } from "react-router-dom";
import "./Main.css";
import { useEffect } from "react";

const ProjectDetails = () => {
  const project = useLoaderData();
  //   console.log(project);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in-down" className="border-2 rounded shadow-xl  my-5">
        <div
          className="image_details"
          style={{
            backgroundImage: `url(${project?.data?.image})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="p-5">
          <p className="text-3xl pb-3 font-semibold">{project?.data?.title}</p>
          <p className="font-semibold py-3">{project?.data?.description}</p>
          <div className="flex justify-between">
            <button className="border-2 px-4 py-2 rounded text-orange-500 font-bold ">
              <a href={project?.data?.g_frontend}>Github Client Link</a>
            </button>
            <div>
              {project?.data?.g_backend && (
                <button className="border-2 px-4 py-2 rounded text-orange-500 font-bold ">
                  <a href={project?.data?.g_backend}>Github Server Link</a>
                </button>
              )}
            </div>
            <button className="border-2 px-4 py-2 rounded text-orange-500 font-bold ">
              <a href={project?.data?.live_link}>Live Link</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
