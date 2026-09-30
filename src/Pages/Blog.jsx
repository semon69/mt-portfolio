import { useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";
import Reveal from "../components/Reveal";
import { EmptyState, ErrorState } from "../components/ui/States";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";

const formatDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
};

const Blog = () => {
  const { data, loading, error } = useFetch(endpoints.blogs);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Drafts are hidden. Posts written before `published` existed have no
  // value at all, so only an explicit false hides one.
  const posts = (data ?? []).filter((post) => post?.published !== false);

  return (
    <Section
      eyebrow="Writing"
      title="Notes on building things"
      intro="Occasional write-ups on problems I've run into and what I learned solving them."
    >
      {loading && (
        <div className="space-y-6">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="grid gap-6 rounded-xl border border-line bg-surface p-6 md:grid-cols-[minmax(0,18rem)_1fr]"
            >
              <Skeleton className="aspect-[16/10] rounded-lg" />
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && <ErrorState message={error} />}

      {!loading && !error && posts.length === 0 && (
        <EmptyState message="No posts published yet." />
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="space-y-6">
          {posts.map((blog, index) => {
            const published = formatDate(blog?.createdAt);

            return (
              <Reveal key={blog?._id} delay={Math.min(index * 0.08, 0.32)}>
                <Card
                  interactive
                  className="grid gap-6 overflow-hidden p-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-8"
                >
                  {blog?.image && (
                    <img
                      src={blog.image}
                      alt=""
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-lg border border-line object-cover"
                    />
                  )}

                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {blog?.title}
                    </h2>

                    {(published || blog?.tags?.length > 0) && (
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-faint">
                        {published && (
                          <span className="inline-flex items-center gap-1.5">
                            <FiCalendar aria-hidden="true" />
                            <time dateTime={blog.createdAt}>{published}</time>
                          </span>
                        )}
                        {blog?.tags?.length > 0 && (
                          <ul className="flex flex-wrap gap-2">
                            {blog.tags.map((tag) => (
                              <li
                                key={tag}
                                className="rounded-md border border-line bg-raised px-2 py-0.5 text-muted"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {blog?.excerpt && (
                      <p className="mt-4 text-base leading-relaxed text-ink/80">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Authored by the site owner in the dashboard's
                        rich-text editor, so it arrives as HTML. */}
                    <div
                      className="rich-text mt-4"
                      dangerouslySetInnerHTML={{
                        __html: blog?.description || "",
                      }}
                    />
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      )}
    </Section>
  );
};

export default Blog;
