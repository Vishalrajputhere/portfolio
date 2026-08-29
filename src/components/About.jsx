import React from "react";
import aboutPic from "../img/about.png";
import { motion } from "framer-motion";
import { certificationEntries, experienceEntries, skillGroups, timelineEntries } from "../content/siteContent";

function About() {
  const aboutVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      variants={aboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-white"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About the engineer</h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I build products with a focus on reliability, clarity, and maintainability. My work spans interface design, application architecture, and the implementation details that make software feel intentional.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I’m currently completing my MCA while building production-style projects that demonstrate systems thinking, state management, accessibility, and performance awareness.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
              <img src={aboutPic} alt="Vishal Singh portrait" className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.heading} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">{group.heading}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Professional experience</h3>

          <div className="mt-6 space-y-5">
            {experienceEntries.map((entry) => (
              <article key={entry.title} className="rounded-2xl border border-cyan-400/15 bg-slate-950/40 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{entry.title}</h4>
                    <p className="mt-1 text-sm font-medium text-cyan-200">{entry.organization}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
                    {entry.meta}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">{entry.description}</p>

                <ul className="mt-4 space-y-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Certifications</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {certificationEntries.map((entry) => (
              <article key={entry.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{entry.title}</h4>
                    <p className="mt-1 text-sm text-cyan-200">{entry.issuer}</p>
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                    {entry.meta}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.skillsCovered.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Education and milestones</h3>

          <div className="relative mt-8 space-y-5 before:absolute before:left-[10px] before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-white/15 before:to-transparent">
            {timelineEntries.map((entry) => (
              <article
                key={entry.title}
                className="relative pl-9"
              >
                <span className="absolute left-0 top-2 h-5 w-5 rounded-full border border-cyan-300/80 bg-cyan-400/15 shadow-[0_0_18px_rgba(34,211,238,0.45)]" aria-hidden="true" />

                <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4 backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-slate-950/40">
                  <h4 className="text-base font-semibold text-white sm:text-lg">{entry.title}</h4>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200/90">{entry.category}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
