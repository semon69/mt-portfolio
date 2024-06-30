import React, { useEffect, useState } from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch("https://portfolio-server-cyan.vercel.app/api/v1/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="space-y-10 pt-16 md:pt-0 p-2">
      <h2 className="text-4xl text-center mb-8 font-bold text-orange-500 italic border-b-4 lg:w-1/4 lg:mx-auto pb-3  border-b-orange-600 my-10">
        Blogs
      </h2>
      <div className="">
        {blogs?.data?.map((blog) => (
          <div
            data-aos="zoom-in-down"
            key={blog?._id}
            className="border  border-black shadow-xl p-5 rounded space-y-6 md:grid md:grid-cols-2 items-center gap-5 my-5"
          >
            <div className="">
              <img className="w-full mx-auto" src={blog?.image} alt="" />
            </div>
            <div className="space-y-5">
              <p className="font-semibold text-xl text-orange-500">
                {blog?.title}
              </p>
              {/* <p>
                {"=>"} {blog?.description}
              </p> */}
              <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
