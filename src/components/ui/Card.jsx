const Card = ({ children, className = "", interactive = false, ...props }) => (
  <div
    className={`rounded-xl border border-line bg-surface ${
      interactive
        ? "transition-all duration-300 hover:border-accent/40 hover:shadow-lift hover:-translate-y-1"
        : ""
    } ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
