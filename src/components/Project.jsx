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
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            A small set of projects that show product thinking, full-stack execution, and practical implementation quality.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projectHighlights.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[1.75rem] border bg-slate-950/30 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-950/40 ${project.featured ? "border-cyan-400/25" : "border-white/10"}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${project.featured ? "bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" : "bg-gradient-to-r from-white/20 via-white/5 to-transparent"}`} />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-200/90">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                </div>

                {project.featured ? (
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-slate-400">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Project;
