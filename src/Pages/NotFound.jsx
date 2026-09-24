import { Link, useRouteError } from "react-router-dom";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

const NotFound = () => {
  const error = useRouteError();
  const status = error?.status ?? 404;

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-semibold text-accent sm:text-8xl">
        {status}
      </p>
      <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">
        {status === 404 ? "This page doesn't exist" : "Something went wrong"}
      </h1>
      <p className="mt-3 max-w-md text-muted">
        {status === 404
          ? "The link may be outdated, or the page has moved."
          : "An unexpected error occurred while loading this page."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Back to home</Button>
        <Button to="/projects" variant="outline">
          Browse projects
        </Button>
      </div>
      <Link
        to="/contact"
        className="mt-8 text-sm text-muted underline underline-offset-4 hover:text-accent"
      >
        Report a broken link
      </Link>
    </Container>
  );
};

export default NotFound;
