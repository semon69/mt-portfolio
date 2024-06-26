import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Blog from "./Pages/Blog.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-cyan.vercel.app/api/v1/project/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
