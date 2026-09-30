import Section from "../components/ui/Section";
import Skeleton from "../components/ui/Skeleton";
import Reveal from "../components/Reveal";
import { EmptyState, ErrorState } from "../components/ui/States";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";
import { groupSkills } from "../data/skillCategories";

const Skills = () => {
  const { data, loading, error } = useFetch(endpoints.skills);
  const groups = groupSkills(data ?? []);

  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technologies I work with"
      intro="The languages, frameworks and tools I reach for day to day."
      className="border-t border-line"
    >
      {loading && (
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4 bg-bg p-6">
              <Skeleton className="h-3 w-28" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((__, j) => (
                  <Skeleton key={j} className="h-7 w-20 rounded-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && groups.length === 0 && (
        <EmptyState message="No skills added yet." />
      )}

      {!loading && !error && groups.length > 0 && (
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([category, items], index) => (
            <Reveal key={category} delay={Math.min(index * 0.06, 0.3)}>
              <section className="h-full bg-bg p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill?._id ?? skill?.name}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/40 hover:text-ink"
                    >
                      {skill?.name}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Skills;
