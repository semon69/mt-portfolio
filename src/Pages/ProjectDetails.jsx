import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Magnetic from "../components/ui/Magnetic";
import Reveal from "../components/Reveal";
import { splitTech } from "../utils/tech";

const ProjectDetails = () => {
  const payload = useLoaderData();
  const project = payload?.data;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [project?._id]);

  const tech = splitTech(project?.tech);

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <FiArrowLeft aria-hidden="true" />
          All projects
        </Link>

        <Reveal>
          <header className="mt-8 max-w-3xl">
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {project?.title}
            </h1>

            {tech.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-raised px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {project?.live_link && (
                <Magnetic>
                  <Button href={project.live_link}>
                    <FiExternalLink aria-hidden="true" />
                    Visit live site
                  </Button>
                </Magnetic>
              )}
              {project?.g_frontend && (
                <Magnetic>
                  <Button href={project.g_frontend} variant="outline">
                    <FiGithub aria-hidden="true" />
                    Frontend code
                  </Button>
                </Magnetic>
              )}
              {project?.g_backend && (
                <Magnetic>
                  <Button href={project.g_backend} variant="outline">
                    <FiGithub aria-hidden="true" />
                    Backend code
                  </Button>
                </Magnetic>
              )}
            </div>
          </header>
        </Reveal>

        {project?.image && (
          <Reveal delay={0.08}>
            <figure className="mt-12 overflow-hidden rounded-xl border border-line bg-raised">
              <img
                src={project.image}
                alt={`Screenshot of ${project?.title}`}
                className="w-full object-cover object-top"
              />
            </figure>
          </Reveal>
        )}

        {project?.description && (
          <Reveal delay={0.12}>
            <div className="mt-12 max-w-prose">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Overview
              </h2>
              <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted sm:text-lg">
                {project.description}
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-16 border-t border-line pt-8">
          <Button to="/projects" variant="ghost">
            <FiArrowLeft aria-hidden="true" />
            Back to all projects
          </Button>
        </div>
      </Container>
    </article>
  );
};

export default ProjectDetails;
