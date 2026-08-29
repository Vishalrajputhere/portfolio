import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLoading } from "./LoadingContext";
import LoadingLogo from "./LoadingLogo";
import LoadingProgress from "./LoadingProgress";
import LoadingMessage from "./LoadingMessage";

function LoadingScreen() {
  const { isLoading, progress, message, isExiting } = useLoading();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.section
          key="portfolio-loading-screen"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#04070d] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.08),_transparent_35%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.55),rgba(255,255,255,0.85),rgba(236,72,153,0.45),transparent)]"
            initial={{ opacity: 0, scaleX: 0.45 }}
            animate={{ opacity: 1, scaleX: isExiting ? 1 : Math.max(0.45, progress / 100) }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="grid w-full gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-xl space-y-6">
                <div className="space-y-4">
                  <LoadingLogo />
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Vishal Singh</p>
                    <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      Launching the portfolio
                    </h1>
                    <p className="max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
                      Preparing the experience, loading critical assets, and revealing the first screen only when the interface is ready.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <LoadingProgress progress={progress} />
                  <LoadingMessage message={message} />
                </div>
              </div>

              <div className="hidden lg:block">
                <motion.div
                  aria-hidden="true"
                  className="h-40 w-40 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(56,189,248,0.12),_rgba(255,255,255,0.02)_55%,transparent_70%)]"
                  animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.65, 1, 0.75], scale: [0.98, 1, 0.98] }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
          <span className="sr-only">{message}</span>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}

export default LoadingScreen;
