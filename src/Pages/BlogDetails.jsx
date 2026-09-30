import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";
import { formatDate, readingTime } from "../utils/readingTime";

const BlogDetails = () => {
  const payload = useLoaderData();
  const post = payload?.data;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [post?._id]);

  const published = formatDate(post?.createdAt);
  const minutes = readingTime(post?.description);

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <FiArrowLeft aria-hidden="true" />
          All posts
        </Link>

        <Reveal>
          {/* Constrained to a comfortable measure — running body text the
              full container width is what made this hard to read. */}
          <header className="mx-auto mt-8 max-w-prose">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
              {post?.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-faint">
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

            {post?.tags?.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-raised px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            {post?.excerpt && (
              <p className="mt-7 text-lg leading-relaxed text-ink/80">
                {post.excerpt}
              </p>
            )}
          </header>
        </Reveal>

        {post?.image && (
          <Reveal delay={0.08}>
            <figure className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-line bg-raised">
              <img
                src={post.image}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          </Reveal>
        )}

        <Reveal delay={0.12}>
          <div
            className="rich-text mx-auto mt-12 max-w-prose text-base sm:text-[1.05rem]"
            // Authored by the site owner in the dashboard's editor.
            dangerouslySetInnerHTML={{ __html: post?.description || "" }}
          />
        </Reveal>

        <div className="mx-auto mt-16 max-w-prose border-t border-line pt-8">
          <Button to="/blog" variant="outline">
            <FiArrowLeft aria-hidden="true" />
            Back to all posts
          </Button>
        </div>
      </Container>
    </article>
  );
};

export default BlogDetails;
