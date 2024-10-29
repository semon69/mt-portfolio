import { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-cyan.vercel.app/api/v1/experience")
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  console.log(experience?.data);

  return (
    <div className="my-10">
      <p className="text-4xl font-bold italic text-center text-orange-500 my-8 border-b-orange-600 border-b-4 lg:w-1/4 lg:mx-auto pb-3">
        Experience
      </p>
      <div className="md:flex md:gap-3">
        {experience?.data?.map((ex) => (
          <div key={ex?._id} className= "w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-orange-500">
              {ex?.title} at {ex?.company}
            </h3>
            <p className="text-gray-600 py-3">{ex?.timeSpan}</p>
            <p className="text-black">{ex?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
