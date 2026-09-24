import { FiBriefcase } from "react-icons/fi";
import Section from "../components/ui/Section";
import Skeleton from "../components/ui/Skeleton";
import Reveal from "../components/Reveal";
import { EmptyState, ErrorState } from "../components/ui/States";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";

const Experience = () => {
  const { data: roles, loading, error } = useFetch(endpoints.experience);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      className="border-t border-line"
    >
      {loading && (
        <div className="space-y-4">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="space-y-3 rounded-xl border border-line bg-surface p-6"
            >
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && roles?.length === 0 && (
        <EmptyState message="No experience entries yet." />
      )}

      {!loading && !error && roles?.length > 0 && (
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {roles.map((role, index) => (
            <Reveal key={role?._id} as="li" delay={index * 0.08}>
              <div className="relative">
                {/* Timeline marker */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-6 grid h-6 w-6 place-items-center rounded-full border border-line bg-bg text-[0.6rem] text-accent sm:-left-[2.35rem]"
                >
                  <FiBriefcase />
                </span>

                <div className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold">{role?.title}</h3>
                    {role?.timeSpan && (
                      <p className="font-mono text-xs text-faint">
                        {role.timeSpan}
                      </p>
                    )}
                  </div>
                  {role?.company && (
                    <p className="mt-1 text-sm font-medium text-accent">
                      {role.company}
                    </p>
                  )}
                  {role?.description && (
                    <p className="mt-4 leading-relaxed text-muted">
                      {role.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      )}
    </Section>
  );
};

export default Experience;
