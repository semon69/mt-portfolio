import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiFileText, FiMapPin } from "react-icons/fi";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Magnetic from "../components/ui/Magnetic";
import HeroOrbit from "../components/HeroOrbit";
import Marquee from "../components/Marquee";
import {
  RESUME_VIEW_URL,
  marqueeItems,
  profile,
  socials,
  stats,
} from "../data/profile";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

// Children animate in sequence rather than all at once.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Banner = () => (
  <section className="relative overflow-hidden">
    {/* Decorative backdrop */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-x-0 top-0 h-[40rem] glow" />
    </div>

    <Container className="relative pb-12 pt-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.company.role} at {profile.company.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-[3.85rem]"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-display text-xl text-accent sm:text-2xl"
          >
            <Typewriter
              words={profile.roles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <FiMapPin className="text-accent" aria-hidden="true" />
              {profile.location}
            </span>
            <span>
              Currently at{" "}
              <a
                href={profile.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                {profile.company.name}
              </a>
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button to="/projects" size="lg">
                View my work
                <FiArrowRight aria-hidden="true" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={RESUME_VIEW_URL} variant="outline" size="lg">
                <FiFileText aria-hidden="true" />
                Résumé
              </Button>
            </Magnetic>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex items-center gap-3">
            {socials.map(({ label, href, icon }) => {
              const Icon = iconMap[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Perpetually orbiting tech rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-first lg:order-none"
        >
          <HeroOrbit />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bg px-5 py-6 text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs leading-snug text-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </Container>

    {/* Always-scrolling stack strip */}
    <div className="mt-12 border-y border-line bg-surface/50 py-5">
      <Marquee items={marqueeItems} duration="42s" />
    </div>
  </section>
);

export default Banner;
