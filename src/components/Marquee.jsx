/**
 * Continuously scrolling strip. The list is rendered twice and the track
 * translates exactly -50%, so the loop is seamless.
 */
const Marquee = ({ items, duration = "38s", className = "" }) => (
  <div className={`fade-x overflow-hidden ${className}`}>
    <ul
      className="flex w-max animate-marquee items-center gap-3"
      style={{ "--marquee-duration": duration }}
    >
      {[...items, ...items].map((item, index) => (
        <li
          key={`${item}-${index}`}
          aria-hidden={index >= items.length}
          className="flex items-center gap-3"
        >
          <span className="whitespace-nowrap rounded-lg border border-line bg-surface px-4 py-2 text-sm font-medium text-muted">
            {item}
          </span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  </div>
);

export default Marquee;
