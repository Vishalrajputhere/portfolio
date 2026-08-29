import { motion, useReducedMotion } from "framer-motion";

function LoadingLogo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(56,189,248,0.14)]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.18),_transparent_65%)]" />
      <div className="relative text-3xl font-semibold tracking-[0.22em] text-slate-100">
        VS
      </div>
    </motion.div>
  );
}

export default LoadingLogo;
