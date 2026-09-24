import { FiArrowRight } from "react-icons/fi";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Magnetic from "../components/ui/Magnetic";
import Reveal from "../components/Reveal";
import { CardSkeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import ProjectCard from "../components/ProjectCard";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";

const BestProjects = () => {
  const { data: projects, loading, error } = useFetch(endpoints.projects);
  const featured = projects?.slice(0, 4) ?? [];

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Things I've built"
      intro="A few projects that show how I approach problems end to end."
      className="border-t border-line"
    >
      {loading && (
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && featured.length === 0 && (
        <EmptyState message="No projects published yet." />
      )}

      {!loading && !error && featured.length > 0 && (
        <>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <Reveal key={project?._id} delay={index * 0.09}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {projects.length > featured.length && (
            <div className="mt-12 flex justify-center">
              <Magnetic>
                <Button to="/projects" variant="outline" size="lg">
                  See all {projects.length} projects
                  <FiArrowRight aria-hidden="true" />
                </Button>
              </Magnetic>
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default BestProjects;
