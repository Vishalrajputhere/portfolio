import { motion, useReducedMotion } from "framer-motion";

function LoadingProgress({ progress }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
      <motion.div
        className="absolute inset-y-0 left-0 origin-left rounded-full bg-[linear-gradient(90deg,rgba(56,189,248,0.15),rgba(56,189,248,0.95),rgba(236,72,153,0.6))]"
        initial={false}
        animate={{ scaleX: progress / 100 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default LoadingProgress;
