import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/**
 * Three counter-rotating rings of technology marks that never stop moving.
 *
 * Each icon sits at a computed left/top percentage inside its ring, then
 * spins the opposite way at the same duration so it stays upright while
 * the ring turns. The nesting matters: one element cannot carry both the
 * centring translate and the animation transform.
 */
const rings = [
  {
    inset: "0%",
    duration: "38s",
    reverse: false,
    box: "h-10 w-10 text-lg sm:h-12 sm:w-12 sm:text-xl",
    icons: [SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiDocker],
  },
  {
    inset: "16%",
    duration: "29s",
    reverse: true,
    box: "h-9 w-9 text-base sm:h-11 sm:w-11 sm:text-lg",
    icons: [SiPostgresql, SiMongodb, SiPrisma, SiRedis],
  },
  {
    inset: "32%",
    duration: "22s",
    reverse: false,
    box: "h-8 w-8 text-sm sm:h-9 sm:w-9 sm:text-base",
    icons: [SiExpress, SiTailwindcss, SiStripe],
  },
];

const Ring = ({ inset, duration, reverse, icons, box }) => (
  <div
    className={`absolute rounded-full border border-line/80 ${
      reverse ? "animate-spin-reverse" : "animate-spin-slow"
    }`}
    style={{ inset, "--spin-duration": duration }}
  >
    {icons.map((Icon, index) => {
      const angle = (index / icons.length) * Math.PI * 2 - Math.PI / 2;
      const left = 50 + 50 * Math.cos(angle);
      const top = 50 + 50 * Math.sin(angle);

      return (
        <div
          key={index}
          className="absolute"
          style={{ left: `${left}%`, top: `${top}%` }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            {/* Cancels the ring rotation so the marks stay readable. */}
            <div
              className={reverse ? "animate-spin-slow" : "animate-spin-reverse"}
              style={{ "--spin-duration": duration }}
            >
              <span
                className={`grid place-items-center rounded-xl border border-line bg-surface text-muted shadow-soft transition-colors hover:text-accent ${box}`}
              >
                <Icon />
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const HeroOrbit = () => (
  <div
    aria-hidden="true"
    className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-[25rem] lg:max-w-[29rem]"
  >
    {/* Drifting aurora behind the rings */}
    <div className="absolute inset-[10%] animate-aurora rounded-full bg-accent/20 blur-3xl" />

    {/* Faint dashed guide ring */}
    <div className="absolute inset-[8%] rounded-full border border-dashed border-line/60" />

    {rings.map((ring) => (
      <Ring key={ring.inset} {...ring} />
    ))}

    {/* Core */}
    <div className="absolute inset-[43%]">
      <div className="relative grid h-full w-full place-items-center rounded-full bg-accent-solid shadow-glow">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
        <span className="relative font-display text-base font-bold text-white sm:text-lg">
          ES
        </span>
      </div>
    </div>
  </div>
);

export default HeroOrbit;
