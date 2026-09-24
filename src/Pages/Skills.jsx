import Section from "../components/ui/Section";
import Skeleton from "../components/ui/Skeleton";
import Reveal from "../components/Reveal";
import { EmptyState, ErrorState } from "../components/ui/States";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";
import { expertise } from "../data/profile";

const Skills = () => {
  const { data: skills, loading, error } = useFetch(endpoints.skills);

  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technologies I work with"
      intro="The languages, frameworks and tools I reach for day to day."
      className="border-t border-line"
    >
      {loading && (
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i}>
              <Skeleton className="aspect-[4/3] rounded-xl" />
            </li>
          ))}
        </ul>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && skills?.length === 0 && (
        <EmptyState message="No skills added yet." />
      )}

      {!loading && !error && skills?.length > 0 && (
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <Reveal
              key={skill?._id}
              as="li"
              delay={Math.min(index * 0.035, 0.4)}
            >
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-line bg-surface px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-raised">
                <img
                  src={skill?.image}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                />
                <p className="text-xs font-medium text-muted transition-colors group-hover:text-ink sm:text-sm">
                  {skill?.name}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      )}

      {/* Grouped capability list from the CV, independent of the API. */}
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((group, index) => (
          <Reveal key={group.group} delay={Math.min(index * 0.06, 0.3)}>
            <div className="h-full bg-bg p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
