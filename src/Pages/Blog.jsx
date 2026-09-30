import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";
import Reveal from "../components/Reveal";
import { EmptyState, ErrorState } from "../components/ui/States";
import useFetch from "../hooks/useFetch";
import { endpoints } from "../config/api";
import { formatDate, readingTime } from "../utils/readingTime";
import { sortByNewest } from "../utils/sortByNewest";

/** Falls back to the opening of the body when no excerpt was written. */
const summarise = (post) => {
  if (post?.excerpt?.trim()) return post.excerpt.trim();

  const plain = String(post?.description ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return plain.length > 180 ? `${plain.slice(0, 180)}…` : plain;
};

const PostCard = ({ post }) => {
  const published = formatDate(post?.createdAt);
  const minutes = readingTime(post?.description);

  return (
    <Card interactive className="group flex h-full flex-col overflow-hidden">
      <Link
        to={`/blog/${post?._id}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden bg-raised"
      >
        <img
          src={post?.image}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-faint">
          {published && (
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar aria-hidden="true" />
              <time dateTime={post.createdAt}>{published}</time>
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <FiClock aria-hidden="true" />
            {minutes} min read
          </span>
        </div>

        <h2 className="mt-3 text-xl font-semibold leading-snug">
          <Link
            to={`/blog/${post?._id}`}
            className="transition-colors hover:text-accent"
          >
            {post?.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {summarise(post)}
        </p>

        {post?.tags?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-line bg-raised px-2 py-0.5 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/blog/${post?._id}`}
          className="mt-6 inline-flex items-center gap-1.5 border-t border-line pt-5 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5"
        >
          Read post
          <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
};

const Blog = () => {
  const { data, loading, error } = useFetch(endpoints.blogs);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Drafts are hidden. Posts written before `published` existed have no
  // value, so only an explicit false hides one.
  const posts = sortByNewest(
    (data ?? []).filter((post) => post?.published !== false)
  );

  return (
    <Section
      eyebrow="Writing"
      title="Notes on building things"
      intro="Occasional write-ups on problems I've run into and what I learned solving them."
    >
      {loading && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-line bg-surface"
            >
              <Skeleton className="aspect-[16/9] rounded-none" />
              <div className="space-y-3 p-6">
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-5 w-3/4" />
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post?._id} delay={Math.min(index * 0.08, 0.32)}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Blog;
