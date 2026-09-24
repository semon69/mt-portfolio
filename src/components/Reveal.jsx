import { motion } from "framer-motion";

const directions = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered entrance. Replaces AOS so the whole site runs on one
 * animation system. `whileInView` with `once` keeps it cheap.
 */
const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.55,
  className = "",
  as = "div",
}) => {
  const offset = directions[direction] ?? directions.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
