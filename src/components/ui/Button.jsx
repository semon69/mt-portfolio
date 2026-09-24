import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-accent text-accent-ink hover:brightness-110 hover:-translate-y-0.5 shadow-soft",
  outline:
    "border border-line text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "text-muted hover:text-accent hover:bg-raised",
};

const sizes = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5",
  lg: "px-6 py-3 text-base",
};

/**
 * Renders a real <button>, <a> or react-router <Link> depending on props.
 * The previous markup nested <Link> inside <button>, which is invalid HTML
 * and breaks keyboard activation.
 */
const Button = ({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  const Tag = as || "button";
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Button;
