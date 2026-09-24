import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "./hooks/useTheme.jsx";
import { endpoints } from "./config/api.js";
import Main from "./Pages/Main.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Blog from "./Pages/Blog.jsx";
import ProjectDetails from "./Pages/ProjectDetails.jsx";
import NotFound from "./Pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
        // Scoped here so a bad id keeps the nav and footer in place.
        errorElement: <NotFound />,
        loader: ({ params }) => fetch(endpoints.project(params.id)),
      },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
