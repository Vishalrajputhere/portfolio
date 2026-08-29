import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useLoading } from "./loading/LoadingContext";

const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Project = lazy(() => import("../components/Project"));
const Resume = lazy(() => import("../components/Resume"));

function AnimatedRoutes() {
  const location = useLocation();
  const { markContentReady, isLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      markContentReady();
    }
  }, [isLoading, location.pathname, markContentReady]);

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center text-sm text-slate-300">
            Loading section...
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
