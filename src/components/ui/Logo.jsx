import { useId } from "react";
import { profile } from "../../data/profile";

/**
 * The "E" monogram, matching public/favicon.svg.
 *
 * The gradient id is generated per instance — a hardcoded id would collide
 * once the logo renders in both the header and the footer.
 */
export const LogoMark = ({ className = "h-8 w-8" }) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="15" fill={`url(#${gradientId})`} />

      <g fill="#ffffff">
        <rect x="19" y="18" width="7.5" height="28" rx="3.75" />
        <rect x="19" y="18" width="26" height="7.5" rx="3.75" />
        <rect x="19" y="28.25" width="18" height="7.5" rx="3.75" />
        <rect x="19" y="38.5" width="26" height="7.5" rx="3.75" />
      </g>
    </svg>
  );
};

/** Mark plus wordmark, used for the header and footer home links. */
const Logo = ({ className = "", markClassName = "h-8 w-8", withWordmark = true }) => (
  <span className={`group inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark
      className={`${markClassName} shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
    />
    {withWordmark && (
      <span className="font-display text-lg font-bold tracking-tighter text-ink">
        {profile.firstName}
        <span className="text-accent">.</span>
      </span>
    )}
    <span className="sr-only">{profile.name} — home</span>
  </span>
);

export default Logo;
