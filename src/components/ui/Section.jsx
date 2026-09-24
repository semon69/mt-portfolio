import Container from "./Container";
import Reveal from "../Reveal";

/**
 * A page section with its eyebrow label, heading and optional intro.
 * Replaces the italic `border-b-4` heading that was duplicated in five files.
 */
const Section = ({ id, eyebrow, title, intro, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}>
    <Container>
      {(eyebrow || title) && (
        <Reveal>
          <header className="mb-10 max-w-prose sm:mb-14">
            {eyebrow && (
              <p className="mb-3 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            )}
            {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
          </header>
        </Reveal>
      )}
      {children}
    </Container>
  </section>
);

export default Section;
