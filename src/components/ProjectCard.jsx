import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import Card from "./ui/Card";
import { splitTech } from "../utils/tech";


const ProjectCard = ({ project }) => {
  const tech = splitTech(project?.tech);

  return (
    <Card interactive className="group overflow-hidden flex flex-col">
      <Link
        to={`/projects/${project?._id}`}
        className="block overflow-hidden bg-raised"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={project?.image}
          alt=""
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">
          <Link
            to={`/projects/${project?._id}`}
            className="transition-colors hover:text-accent"
          >
            {project?.title}
          </Link>
        </h3>

        {project?.description && (
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        )}

        {tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {tech.slice(0, 5).map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-raised px-2.5 py-1 text-xs font-medium text-muted"
              >
                {item}
              </li>
            ))}
            {tech.length > 5 && (
              <li className="px-1 py-1 text-xs text-faint">
                +{tech.length - 5}
              </li>
            )}
          </ul>
        )}

        <div className="mt-6 flex items-center gap-5 border-t border-line pt-5 text-sm font-semibold">
          <Link
            to={`/projects/${project?._id}`}
            className="inline-flex items-center gap-1.5 text-accent transition-transform hover:translate-x-0.5"
          >
            Case study
            <FiArrowUpRight aria-hidden="true" />
          </Link>
          {project?.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
            >
              Live site
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
