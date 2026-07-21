import React from "react";
import { motion } from "framer-motion";
import { projectHighlights } from "../content/siteContent";

function Project() {
  return (
    <motion.section
      className="w-full text-white"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Selected work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">A small set of projects that show product thinking, full-stack execution, and practical implementation quality.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectHighlights.map((project) => (
            <article key={project.title} className={`rounded-[1.75rem] border bg-white/5 p-5 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 ${project.featured ? "border-cyan-400/30" : "border-white/10"}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.featured ? <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">Featured</span> : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-200">{item}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Live Demo</a>
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Source</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Project;
