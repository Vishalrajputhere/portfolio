import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function LoadingMessage({ message }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-6 text-center text-sm text-slate-300" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={message}
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-medium tracking-wide"
        >
          {message}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default LoadingMessage;
