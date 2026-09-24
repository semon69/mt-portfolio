import { motion, useScroll, useSpring } from "framer-motion";

/** Thin accent bar across the top showing how far down the page you are. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent-solid"
    />
  );
};

export default ScrollProgress;
