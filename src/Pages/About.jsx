import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Reveal from "../components/Reveal";
import { about, profile } from "../data/profile";

const About = () => {
  const ref = useRef(null);
  // Gentle parallax as the portrait passes through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [26, -26]);

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A bit about how I work"
      className="border-t border-line"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <div>
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p className="leading-relaxed text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <Card className="h-full p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  <FiBookOpen aria-hidden="true" />
                  Education
                </p>
                <p className="mt-3 font-medium text-ink">
                  {about.education.degree}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {about.education.institution}
                </p>
                <p className="mt-1 text-sm text-faint">
                  {about.education.detail}
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card className="h-full p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  <FiAward aria-hidden="true" />
                  Achievements
                </p>
                <ul className="mt-3 space-y-2">
                  {about.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.18} className="sm:col-span-2">
              <Card className="p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  <FiGlobe aria-hidden="true" />
                  Languages
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {about.languages.map((language) => (
                    <li
                      key={language.name}
                      className="rounded-md border border-line bg-raised px-2.5 py-1 text-xs text-muted"
                    >
                      <span className="font-medium text-ink">
                        {language.name}
                      </span>{" "}
                      · {language.level}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Portrait */}
        <motion.figure
          ref={ref}
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-start"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl"
          />
          <div className="group relative overflow-hidden rounded-2xl border border-line bg-raised">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            {/* Keeps the caption legible over any photo */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-lg font-semibold text-white">
                {profile.name}
              </p>
              <p className="text-sm text-white/75">
                {profile.title} · {profile.location}
              </p>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </Section>
  );
};

export default About;
