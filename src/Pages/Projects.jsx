import { useEffect } from "react";
import Section from "../components/ui/Section";
import Reveal from "../components/Reveal";
import { CardSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import ProjectCard from "../components/ProjectCard";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";

const Projects = () => {
  const { data: projects, loading, error } = useFetch(endpoints.projects);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Section
      eyebrow="Portfolio"
      title="All projects"
      intro="Everything I've shipped publicly. Open any project for the full write-up, stack and source."
    >
      {loading && (
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && projects?.length === 0 && (
        <EmptyState message="No projects published yet." />
      )}

      {!loading && !error && projects?.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project?._id} delay={Math.min(index * 0.07, 0.35)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Projects;
