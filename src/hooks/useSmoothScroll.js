import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial smooth scrolling. Skipped entirely when the viewer prefers
 * reduced motion, since hijacking scroll is exactly what that setting
 * is asking us not to do.
 */
const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Native scrolling on touch feels better than an emulated one.
      smoothTouch: false,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
