// Single source of truth for the API origin.
//
// Defaults to the deployed backend so the site runs with no .env file.
// To point at a local backend instead, create `.env.local`:
//   VITE_API_URL=http://localhost:5000/api/v1
export const API_BASE =
  import.meta.env.VITE_API_URL ??
  "https://portfolio-server-cyan.vercel.app/api/v1";

export const endpoints = {
  projects: `${API_BASE}/project`,
  project: (id) => `${API_BASE}/project/${id}`,
  skills: `${API_BASE}/skill`,
  experience: `${API_BASE}/experience`,
  blogs: `${API_BASE}/blog`,
};
