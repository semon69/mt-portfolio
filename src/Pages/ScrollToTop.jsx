import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // `pageYOffset` is deprecated in favour of `scrollY`.
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-accent shadow-lift backdrop-blur transition-all duration-300 hover:border-accent hover:-translate-y-1 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
