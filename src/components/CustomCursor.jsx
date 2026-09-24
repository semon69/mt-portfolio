import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = 'a, button, input, textarea, select, label, [data-cursor="hover"]';

/**
 * Two-part pointer: a solid dot that tracks the mouse exactly and a soft
 * halo that trails behind on a spring. Only mounts for real pointing
 * devices, and stays out of the way when reduced motion is requested.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  // Raw pointer position.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // The halo lags behind; the dot is near-instant.
  const haloX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const haloY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 1100, damping: 48, mass: 0.28 });
  const dotY = useSpring(y, { stiffness: 1100, damping: 48, mass: 0.28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reduced) return undefined;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      // `closest` fails on non-element targets such as text nodes.
      const target = event.target;
      setHovering(
        target instanceof Element ? Boolean(target.closest(INTERACTIVE)) : false
      );
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      {/* Halo */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-accent/25"
        style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: visible ? (hovering ? 0.45 : 0.32) : 0,
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      {/* Dot */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-accent-solid"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 10 : 8,
          height: hovering ? 10 : 8,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.7 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
      />
    </div>
  );
};

export default CustomCursor;
